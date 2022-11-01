import Image from "next/image";
import React from "react";
const IMAGE_URL =
  "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000";
export default function Navbar({ type }: { type?: "no_auth" | "auth" }) {
  return (
    <article className={`navbar__container ${type || ""}`}>
      {!type ? (
        <section>
          <div className="circle"></div>
        </section>
      ) : (
        <>
          <section>
            <div className="circle"></div>
          </section>

          <ul>
            <li className="active">Dashboard</li>
            <li>Accounts</li>
            <li>Settings</li>
          </ul>

          <section>
            <div className="notification">12</div>

            <div></div>

            <div className="user">
              <div className="image">
                <Image
                  src={IMAGE_URL}
                  alt="Admin profile picture"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="text">
                <div>Tony Stark</div>
                <div>Super Admin</div>
              </div>
              <div>
                <img src="/svg/arrow-dropdown.svg" alt="" />
              </div>
            </div>
          </section>
        </>
      )}
    </article>
  );
}
