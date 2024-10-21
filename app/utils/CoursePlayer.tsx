import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  
  useEffect(() => {
    axios
      .post("https://stride-wise-backend.onrender.com/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
      // console.log("VideoData",videoData)
  }, []);
  
  return (
   
    <div style={{position:"relative",paddingTop:"56.25%",overflow:"hidden"}}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=ePv5bgop8gl0Vnu5`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
      {/* <p>{videoUrl}</p>
      <iframe
          src={`https://player.vdocipher.com/v2/?otp=20160313versASE323nozHJIfAnoESHr7XD5YrqkuQRMCLFjVApDAqZ04BhryRV3&playbackInfo=eyJ2aWRlb0lkIjoiNTJlZGQ5ZDNlMmVlNDc3NmEzMzQyODM0N2MxODkxYTgifQ==`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe> */}
     
    </div>
  );
};

export default CoursePlayer;