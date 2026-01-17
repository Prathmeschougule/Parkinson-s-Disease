import { Button, Grid } from "@mui/material";
import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";

function ExerciseProgram() {
  return (
    <div className="w-screen h-auto bg-gradient-to-b from-emerald-800 to-emerald-0 mt-15 relative">
      <div>
        <h1 className="text-3xl sm:4xl lg:text-5xl font-bold pt-8 text-center text-white">
          Daily Home Exercise Program
        </h1>
      </div>
      <div className="mt-8 ">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid>
            <div className="bg-blue-100 h-[400px] w-[650px] p-5 m-5 flex ">
              <div>
                <video width="300" controls>
                  <source src="/video/v1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="pl-4 ">
                <h1 className="text-2xl font-semibold">
                  Bradykinesia Exercises
                </h1>
                <h1 className="text-lg font-semibold">
                  Goal: increase speed, amplitude, and fluidity.
                </h1>
                <ul className="list-disc list-inside text-[15px] mt-2 text-neutral-700">
                  <li>
                    BIG Steps Forward/Backward: Step forward with a large
                    stride, <br /> swing arms, pause, then return. 10 reps each
                    leg.
                  </li>
                  <li>
                    Large-Amplitude Training (BIG-style movements) <br /> BIG
                    Arm Swings: Walk in place while swinging arms exaggeratedly
                    for 1–2 minutes.
                  </li>
                  <li>
                    High-Knee Marching: Lift knees high while marching for 1
                    minute.
                  </li>
                  <li>
                    Sit-to-Stand Practice From a chair, stand up using minimal
                    hand support, then sit down slowly.
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid>
            <div className="bg-blue-100 h-[400px] w-[650px] p-5 m-5 flex ">
              <div>
                <video width="750" controls>
                  <source src="/video/Fv2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="pl-4 ">
                <h1 className="text-2xl font-semibold">
                  Seated Warm-up & Mobility (Chair Exercises)
                </h1>
                <h1 className="text-lg font-semibold">
                  Part 1: Seated Warm-up & Mobility (Chair Exercises)Perform
                  these exercises sitting upright in a firm chair with feet flat
                  on the floor.
                </h1>
                <h1>1. Deep Breathing & Chest Expansion</h1>
                <h1>
                  <span className="font-semibold">Action</span>: Place hands on
                  the chest or abdomen. Inhale deeply through the nose, feeling
                  the chest expand, and exhale slowly through the mouth. Focus:
                  Emphasize maximizing lung volume and calming the nervous
                  system.
                </h1>
              </div>
            </div>
          </Grid>
          <Grid>
            <div className="bg-blue-100 h-[400px] w-[650px] p-5 m-5 flex ">
              <div>
                <video width="700" controls>
                  <source src="/video/FV4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="pl-4 ">
                <h1 className="text-2xl font-semibold">
                  Thoracic Rotation (Trunk Twisting)
                </h1>

                <h1>
                  <span className="font-semibold">Action</span>: With arms
                  relaxed or crossed, gently rotate the upper body to look over
                  the right shoulder, then the left. Focus: Loosens stiffness in
                  the spine and improves bed mobility (turning in bed).
                </h1>
              </div>
            </div>
          </Grid>
          <Grid>
            <div className="bg-blue-100 h-[400px] w-[650px] p-5 m-5 flex ">
              <div>
                <video width="900" controls>
                  <source src="/video/Fv3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="pl-4 ">
                <h1 className="text-2xl font-semibold">
                  Neck Mobility (Flexion, Extension & Rotation)
                </h1>
                <h1>
                  <span className="font-semibold">Action:</span>Gently
                  look down towards the floor, then up towards the ceiling.
                  Follow this with slow rotations (looking left and right) and
                  gentle neck circles (clockwise and anti-clockwise). Focus:
                  Reduces neck rigidity and improves visual scanning ability.
                </h1>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="text-center mt-4 mr-6">
        <button className="px-5 py-2 bg-blue-400 text-xl">
          <a href="">Explore more</a>{" "}
        </button>
      </div>
    </div>
  );
}

export default ExerciseProgram;
