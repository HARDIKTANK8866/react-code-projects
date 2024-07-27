import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div class="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">

      <div className="rounded shadow-md h-full">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className=""
          />
        </div>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
