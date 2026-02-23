import React, { useEffect, useState } from "react";

function HomeWorckAlbums(props) {
  const [comments, setComments] = useState([]);
  const [visbilit, setVisbilit] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((mas) => setComments(mas.slice(0, visbilit)));
  }, [visbilit]);
  function load() {
    setVisbilit((visbilit) => visbilit + 10);
  }
  function remov(id){
    setComments((prev)=> prev.filter((item) => item.id !== id));
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
                <button className="btn btn-primary" onClick={()=>remov(item.id)}>удалить</button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={load}>Load more</button>
    </div>
  );
}

export default HomeWorckAlbums;
