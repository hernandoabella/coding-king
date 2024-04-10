import React from "react";

function Main() {
  return (
    <div>
      <div className="flex justify-center place-items-center p-5">
        <div className="md:w-1/2">left side content example: code snippet or image</div>
        <div className="md:w-1/2">
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
            minima itaque sequi, distinctio quasi quia, harum veniam quidem nam
            voluptas sapiente ad facere perspiciatis eveniet dicta enim,
            mollitia eaque.
          </p>
          <a href="#">Read more.</a>
        </div>
      </div>
      <div className="flex p-5">
        <div>link1</div>
        <div>link2</div>
        <div>link3</div>
        <div>link4</div>
        <div>link5</div>
      </div>
    </div>
  );
}

export default Main;
