// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { selectEmail } from "../../redux/slice/authSlice";

// const AdminOnlyRoute = ({ children }) => {
//   const userEmail = useSelector(selectEmail);

//   if (userEmail === "testuser5@gmail.com") {
//     return children;
//   }
//   return (
//     <section style={{ height: "80vh" }}>
//       <div className="container">
//         <h2>Permission Denied.</h2>
//         <p>This page can only be view by an Admin user.</p>
//         <br />
//         <Link to="/">
//           <button className="--btn">&larr; Back To Home</button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export const AdminOnlyLink = ({ children }) => {
//   const userEmail = useSelector(selectEmail);

//   if (userEmail === "testuser5@gmail.com") {
//     return children;
//   }
//   return null;
// };

// // const AdminOnlyRoute = ({ children }) => {
// //   const userEmail = useSelector(selectEmail);
// //    console.log(userEmail);
// //   if (userEmail === "testuser5@gmail.com") {
// //     return children;
// //   }
// //   return null
// //   // (
// //   //   <section style={{ height: "80vh" }}>
// //   //     <div className="container">
// //   //       <h2>Permission Denied.</h2>
// //   //       <p>This page can only be view by an Admin user.</p>
// //   //       <br />
// //   //       <Link to="/">
// //   //         <button className="--btn">&larr; Back To Home</button>
// //   //       </Link>
// //   //     </div>
// //   //   </section>
// //   // );
// // };

// // export const AdminOnlyLink = ({ children }) => {
// //   const userEmail = useSelector(selectEmail);

// //   if (userEmail === "JyothiRajanna@gmail.com") {
// //     return children;
// //   }
// //   return null;
// // };

// export default AdminOnlyRoute;




import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "testuser5@gmail.com") {
    return children;
  }
  return null;
};

const AdminOnlyRoute = ({ children }) => {
  return (
    <AdminOnlyLink>
      <section style={{ height: "80vh" }}>
        <div className="container">
          <h2>Permission Denied.</h2>
          <p>This page can only be viewed by an Admin user.</p>
          <br />
          <Link to="/">
            <button className="--btn">&larr; Back To Home</button>
          </Link>
        </div>
      </section>
    </AdminOnlyLink>
  );
};

export default AdminOnlyRoute;

// import React from "react";
// import { Link } from "react-router-dom";
// const AdminOnlyRoute = ({ children }) => {
//   const userEmail = "testuser5@gmail.com";

//   if (userEmail === "testuser5@gmail.com") {
//     return children;
//   }
//   return (
//     <section style={{ height: "80vh" }}>
//       <div className="container">
//         <h2>Permission Denied.</h2>
//         <p>This page can only be viewed by an Admin user.</p>
//         <br />
//         <Link to="/">
//           <button className="--btn">&larr; Back To Home</button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export const AdminOnlyLink = ({ children }) => {
//   const userEmail = "testuser5@gmail.com";

//   if (userEmail === "testuser5@gmail.com") {
//     return children;
//   }
//   return null;
// };

// export default AdminOnlyRoute;
