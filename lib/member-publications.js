// Automatically load publications for each member from pub_web_body.html and pub_coadvisees_web_body.html
(function() {
    // Define the toggle function for abstracts (same as in pub_web_body.html)
    window.toggle = function(abstract) {
        var divele = document.getElementById(abstract + "div");
        var button = document.getElementById(abstract);
        if (divele.style.display == "block") {
            divele.style.display = "none";
            button.innerHTML = "abstract";
        } else {
            divele.style.display = "block";
            button.innerHTML = "abstract";
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        var containers = document.querySelectorAll('.member-publications');
        if (containers.length === 0) return;

        // Fetch both publication sources
        Promise.all([
            fetch('/publications/').then(function(response) { return response.text(); }),
            fetch('/publications/coadvisees.html').then(function(response) { return response.text(); }).catch(function() { return ''; })
        ])
        .then(function(results) {
            var parser = new DOMParser();

            // Parse main publications
            var mainDoc = parser.parseFromString(results[0], 'text/html');
            var mainPubs = mainDoc.querySelectorAll('ol.myarticles li');

            // Parse co-advisee publications
            var coadviseeDoc = parser.parseFromString(results[1], 'text/html');
            var coadvisePubs = coadviseeDoc.querySelectorAll('ol.myarticles li');

            // Combine all publications
            var allPublications = [];
            mainPubs.forEach(function(pub) { allPublications.push(pub); });
            coadvisePubs.forEach(function(pub) { allPublications.push(pub); });

            containers.forEach(function(container) {
                var authorName = container.getAttribute('data-author');
                if (!authorName) return;

                var matchingPubs = [];

                allPublications.forEach(function(pub) {
                    var pubText = pub.textContent || pub.innerText;
                    // Check if author name appears in the publication
                    if (pubText.indexOf(authorName) !== -1) {
                        // Clone the publication item
                        var clone = pub.cloneNode(true);

                        // Remove article_keywords
                        var keywords = clone.querySelector('.article_keywords');
                        if (keywords) keywords.remove();

                        matchingPubs.push(clone);
                    }
                });

                if (matchingPubs.length > 0) {
                    var details = document.createElement('details');
                    details.className = 'papers-details';
                    var summary = document.createElement('summary');
                    summary.className = 'klink papers-toggle';
                    summary.textContent = 'Papers';
                    details.appendChild(summary);

                    var list = document.createElement('ul');
                    list.className = 'member-pub-list';
                    matchingPubs.forEach(function(pub) {
                        var li = document.createElement('li');
                        li.innerHTML = pub.innerHTML;
                        list.appendChild(li);
                    });

                    details.appendChild(list);
                    container.appendChild(details);
                }
            });
        })
        .catch(function(error) {
            console.error('Error loading publications:', error);
        });
    });
})();
