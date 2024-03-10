"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PropType } from "@/interface";

const PostsPage = () => {
  const [posts, setPosts] = useState<PropType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="container m-auto">
      <h1>PostsPage</h1>
      <ul className="flex flex-col">
        {loading
          ? "Loading"
          : posts.map((post) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className="text-blue-700"
              >
                {post.title}
              </Link>
            ))}
      </ul>
    </div>
  );
};

export default PostsPage;
