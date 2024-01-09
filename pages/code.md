---
layout: page
title: Code
permalink: /code/
tags: menu
weight: 5
---

<a target="_blank" href="https://github.com/kaist-comet">
    <picture>
    <source srcset="/images/github-mark-blue.svg" media="(prefers-color-scheme: light)"/>
    <source srcset="/images/github-mark-white.svg"  media="(prefers-color-scheme: dark)"/>
    <img src="light-image.png" />
    </picture>
</a>


# Julia Packages

Dr. Kwon and members of the COMET Lab wrote some packages for the Julia Language, related to their research.
If you need some introductions to Julia, read the book, [Julia Programming for Operations Research](https://www.chkwon.net/julia).

- [TSPDrone.jl](https://github.com/chkwon/TSPDrone.jl) - This package solves the Traveling Salesman Problem with Drone (TSP-D).
- [RobustShortestPath.jl](https://github.com/chkwon/RobustShortestPath.jl) - This package finds robust shortest paths.
- [TrafficAssignment.jl](https://github.com/chkwon/TrafficAssignment.jl) - This package finds traffic equilibrium.
- [PathDistribution.jl](https://github.com/chkwon/PathDistribution.jl) - This package estimates the number of paths and the path-length distribution using a Monte-Carlo simulation as well as explicitly enumerate all paths.
- [VariationalInequality.jl](https://github.com/chkwon/VariationalInequality.jl) - This package implements algorithms for solving finite-dimensional variational inequality (VI) problems.
- [Complementarity.jl](https://github.com/chkwon/Complementarity.jl) - This package provides a modeling language for Complementarity Problems via JuMP and a solution via the PATH Solver. This package also provides an extension to JuMP to model mathematical programs with equilibrium constraints (MPEC) and solve it using a nonlinear optimization solver.

# TSP/VRP related packages:
- [TSPSolvers.jl](https://github.com/chkwon/TSPSolvers.jl) - A common interface to Concorde.jl, LKH.jl, TravelingSalesmanHeuristics.jl, and Hygese.jl.
- [Concorde.jl](https://github.com/chkwon/Concorde.jl) - Julia interface for the TSP Concorde Solver. 
- [LKH.jl](https://github.com/chkwon/LKH.jl) - Julia interfafce for the Lin-Kernighan-Held (LKH) solver for TSP. 
- [Hygese.jl](https://github.com/chkwon/Hygese.jl) - A Julia wrapper for the Hybrid Genetic Search algorithm for Capacitated Vehicle Routing Problems ([HGS-CVRP](https://github.com/vidalt/HGS-CVRP)) 
- [PyHygese](https://github.com/chkwon/PyHygese) - A Python wrapper for HGS-CVRP.
- [CVRPLIB.jl](https://github.com/chkwon/CVRPLIB.jl) - This downloads and reads data files from [CVRPLIB](http://vrp.galgos.inf.puc-rio.br/index.php/en/). 
- [CVRPSEP.jl](https://github.com/chkwon/CVRPSEP.jl) - A Julia wrapper for [CVRPSEP](https://econ.au.dk/research/researcher-websites/jens-lysgaard/cvrpsep/)


# Data

- [Hazmat Network Data](https://github.com/kaist-comet/Hazmat-Network-Data)
- [Korean Expressway Network Data](https://github.com/kaist-comet/KoreanExpressway)
- [DC-NY-Boston Network Data](https://github.com/kaist-comet/DC-NY-BOS-Network-Data)

# LaTeX Templates

- [LaTeX-Paper-Template](https://github.com/kaist-comet/LaTeX-Paper-Template) - also a tutorial
- [KAIST-Beamer-Template](https://github.com/kaist-comet/KAIST-Beamer-Template) - slides and posters