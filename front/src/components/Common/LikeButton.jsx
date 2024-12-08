import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Inimi goale și pline
import axios from "axios"; // Biblioteca pentru a face cereri HTTP

const LikeButton = ({ userId, postId, commentId }) => {
  const [liked, setLiked] = useState(false);
  const [upvotes, setUpvotes] = useState(0);

  // Verificăm dacă utilizatorul a dat deja like la postare/comentariu
  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        const response = await axios.get(
          `/api/likes/check-like?userId=${userId}&postId=${postId}&commentId=${commentId}`
        );
        setLiked(response.data.liked); // Actualizăm statusul like-ului
      } catch (err) {
        console.error("Eroare la verificarea like-ului:", err);
      }
    };

    checkLikeStatus();
  }, [userId, postId, commentId]);

  const handleLikeClick = async () => {
    try {
      const newLikedStatus = !liked;
      const response = await axios.post("/api/likes/toggle-like", {
        userId,
        postId,
        commentId,
        liked: newLikedStatus,
      });

      setLiked(newLikedStatus); // Actualizăm UI-ul
      setUpvotes(response.data.liked ? upvotes + 1 : upvotes - 1); // Actualizăm numărul de upvotes
    } catch (err) {
      console.error("Eroare la togglarea like-ului:", err);
    }
  };

  return (
    <div onClick={handleLikeClick} style={{ cursor: "pointer" }}>
      {liked ? (
        <AiFillHeart size={30} color="red" />
      ) : (
        <AiOutlineHeart size={30} color="gray" />
      )}
      <span>{upvotes}</span>
    </div>
  );
};

export default LikeButton;
