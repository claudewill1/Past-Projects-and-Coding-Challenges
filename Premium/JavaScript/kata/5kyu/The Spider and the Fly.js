/*Background

A spider web is defined by

    "rings" numbered out from the centre as 0, 1, 2, 3, 4

    "radials" labelled clock-wise from the top as A, B, C, D, E, F, G, H

Here is a picture to help explain:
[source: imgur.com]
Web Coordinates

As you can see, each point where the rings and the radials intersect can be described by a "web coordinate".

So in this example the spider is at H3 and the fly is at E2
Kata Task

Our friendly spider is resting and minding his own spidery business at web-coordinate spider.

An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.

Your task is to calculate and return the shortest path that the spider can take to get to the fly.
Example

The solution to the scenario described by the picture is H3-H2-H1-A0-E1-E2
Notes

    The centre of the web will always be referred to as A0
    Use the - character to separate web-coordinates in your "shortest path" result (see the example above)
    The rings intersect the radials at evenly spaced distances of 1 unit
    The spider can only move along the web. He is not a jumping spider!
    Return "the shortest path" means return shortest total distance of the path from spider to fly
*/
