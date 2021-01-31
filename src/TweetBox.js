import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendtweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "js@dev",
      username: "ts3657@gmail.com",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fbho4-2.fna.fbcdn.net/v/t1.0-9/136683659_887430755362863_8292425062583086359_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=bvJzDnBirRsAX_Q0b9E&_nc_ht=scontent.fbho4-2.fna&oh=40fb028814a5e1048f14fcfe7a8da718&oe=60378BB3",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.0-9/136683659_887430755362863_8292425062583086359_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=bvJzDnBirRsAX_Q0b9E&_nc_ht=scontent.fbho4-2.fna&oh=40fb028814a5e1048f14fcfe7a8da718&oe=60378BB3" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendtweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
