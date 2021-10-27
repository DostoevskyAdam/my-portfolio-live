import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16, Email16 } from "@carbon/icons-react";
import { Pill } from "../../styles";
import { ProfileLink } from "./styles";
import { HeaderContainer, Header, Image, ViewLink } from "./styles";
import Modal from "../Modal";
import Contact from "../../pages/Contact"

const UserHeader = ({ gitData }) => {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <HeaderContainer isHome={location.pathname === "/"}>
        <Header>
          <Image src={gitData.basics.picture} />
          <div>
            <h2>{gitData.basics.name}</h2>
            <h4>
              <a
                href={`https://gitconnected.com/${gitData.basics.username}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                @{gitData.basics.username}
              </a>
            </h4>
            <p>{gitData.basics.label}</p>
            <p>Coding in {gitData.basics.region}</p>
            <p>
              {gitData.basics.yearsOfExperience} years of experience as a
              developer.
            </p>
            <div>
              <br />
              <ul>
                {gitData.basics.profiles.map((profile, i) => (
                  <ProfileLink key={profile.network}>
                    {i !== 0 && " | "}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {profile.network}
                    </a>
                  </ProfileLink>
                ))}
              </ul>
            </div>
          </div>
        </Header>
        <div>
          <ViewLink
            href={`https://gitconnected.com/${gitData.basics.username}/resume`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Résumé</span>
            <ArrowRight16 />
          </ViewLink>
          <ViewLink className="clickme" onClick={() => Toggle()}>
            <span>Contact Me!</span>
            <Email16 />
          </ViewLink>
        </div>
      </HeaderContainer>
      <Modal show={modal} title="Contact" close={Toggle}>
            <Contact />
          </Modal>
      <br />
      <div>
        {gitData.skills.map((skill) => (
          <Pill key={skill.name}>{skill.name}</Pill>
        ))}
      </div>
    </>
  );
};

export default UserHeader;
