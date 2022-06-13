import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAe1BMVEUA/oQNDg4NCw0A/4oC9H8NAAAJdkAIekMNFhIIgEYIhEgMJhkMKBoNGRMA/4cNAAoNBQsLPCID6HkFxWcLYTUC7XsKSysFqVoFtWAE1W8HolYMLx0FzmsKWjIJikkMIBcKUy8HlE8Jbz0GnFQC4HUFvWQMNh8KRSkKaDmFLEHFAAADp0lEQVR4nO2aa3OqMBCGIU1ALSQB5KoiNy///xcebD1tDYLB6cZ+2Oejw4zvbJbddzdYFoIgCIIgCIIgCIIgCIIgyDdvjzCsh3dpuZxi1cZGBcVFk2zeJ/C8wG2pOUG0PTFBphHimBmTRCMm7cewJDKlKK+YhqBeUtlxI4JoxoiWIhGkRhTxdCO0BPVBWm9NSOpcXUE2WSwNKHorNjppfT03E8m93WmHqA+S7YAXSlru9UP0kdzAgvihmhGiPkh+1cEqojtf783/j/RqWEWt9pv/FSXWQTYT6s3U08NqwHMLa81qfRMkG7ACRMc579kXVQ5UJ3l4XswPUY9MgTKJZnOz+kpvS0CCxPO1ngm5IwnGlsTFRFpP+0mWgNiSrBpLayKF7U9hn1oARaEzdmZkH+wadwonA+i3b+3Ym0/YKQ3pA35fkEXH0pqwlSE3rcCdkRCx5fYVesZtCBGRwUHxBlr7d6JEWK0mbZwbksi3zTCTiH8KlefCtsnU34Cg2dDPkmOrCk8DtoZpGgN456pBIqRRT4jKS9MwdW6dryoanpkjSO9kIUr0PeLVrRsh+8GAmNuXJwT8TPQJ704/KwARa+V0eJ58PCD90lCQaPSz/bPzQfnfsLwGUVQHM4osmnwPR9JXl2g8Cq5vI/EcQ4qsw3e/Za5in3n+bQ/k0VSQLMe7SpKBWnXievElty+dpjajh+sigvil8ubzw097QJipfsfrz8otBiMPXd+0YnGCmolUYufyx8TOVanu+22xWiwNtTd+2WgR6Q6q9UmdCxamnBwtL0VJzVvaEFURawxJ4tGaDZew9WYwOknf1Io9PjjF8Mzu7JVYY8iWWLQb+Ma7S5O+vb3M8Ub3x12RZC8ZUyxrOzZdCuc1g1O3HBt3mepXfoVH42pYBGMrCnlsAa4iw6xxpjjvgtH1LXMAyjZvA3sxhS3kmCBZZb8vqJ92Kja9HBqRc2n/BYQj4V359GZtDdP9eaR54zhAHMAWok+tjMmiCaGWxnn1VIQCwC1OZD+x6Zc1oGEL6ycyyQNtst1sRWJTQAqyrPZ9XnYTfwfsQ8Jq3kWfqMC9WhrMuRORe3irFjtzro3EzsD+djvjxlhuCgPfQ/GVdib1wxzw/fWnou1ZtwSIoxl3zXWTmzBDYxrvNCs3q9SVABjbREeSNLamudiSQDz4ek0KmRj9oK5wTxtvimPiQN1bjxC25WqKOoVyaaP8tS9FEQRBEARBEARBEARBEAT52/wDnfZA5tpnCCAAAAAASUVORK5CYII="
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Strive Jobs
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
