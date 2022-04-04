import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { IframeSection } from "./HobbiesStyles";

const Hobbies = () => {
  const [date, setDate] = useState('');
  const [ID, setID] = useState('');
  const [isLoading, setLoading] = useState(false);
  const myHeaders = new Headers();

  //console.log('"Bearer ' + process.env.NEXT_PUBLIC_TOKEN + '"');

  myHeaders.append(
    "Authorization",
    process.env.NEXT_PUBLIC_TOKEN
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      process.env.NEXT_PUBLIC_URL,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setDate(data.collection[0].scheduled_for);
        setID(data.collection[epIndex()].id);
        setLoading(false);
        console.log(ID);
        console.log(date);
      });
  }, []);
  

  const epIndex = () => {
  //   // Get ep scheduled date
  // const scheduled_for = new Date(date).toLocaleString();
  // console.log(scheduled_for);

  // // Get day of the week - Sunday
  // const currDay = new Date().toLocaleDateString();
  // const currTime = new Date().toLocaleTimeString();
  // const currFullDate = currDay + ", " + currTime;

  // Get hours - 18 for 6PM
  // console.log(currDay + ", " + currTime);
    
    if (date == null){
      return 0;
    } else {
      return 1;
    }
  };

  if (isLoading) return <p>Loading...</p>;
  // if (!ID) return <p>No profile data</p>;

  const latestEp = "https://player.simplecast.com/" + ID + "?dark=true";

  console.log(latestEp);

  const renderData = () => {
    if (!isLoading)
      return (
        <Section nopadding id="hobbies">
          <IframeSection>
            <SectionDivider />
            <SectionTitle main>Hobbies</SectionTitle>
            <SectionText>
              Our latest Tech Heads episode and the latest F1: Beyond The Grid 
              episode.
            </SectionText>

            {/* TODO */}
            <iframe
              height="200px"
              width="100%"
              frameborder="no"
              scrolling="no"
              seamless
              src={latestEp}
            ></iframe>
            <br />
            <br />
            
            {/* SPOTIFY PLAYER */}
            <iframe 
              src="https://open.spotify.com/embed/show/44YvwJyqsCEEhNZBxuXZQ9?utm_source=generator&theme=0" 
              width="100%" height="152" frameBorder="0" allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>

          </IframeSection>
        </Section>
      );
  };
  return renderData();
};

export default Hobbies;
