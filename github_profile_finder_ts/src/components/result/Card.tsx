import React from "react";
import Styled from "styled-components";
import { colors } from "../../lib/constants/colors";
import { UserData, Status } from "../../types/interface";

interface CardProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

function Card(props: CardProps) {
  const { userData, setUserData } = props;

  if (userData.data === null) return <></>;
  const {
    avatar_url,
    followers,
    following,
    name,
    login,
    bio,
    html_url,
    public_repos,
  } = userData.data;

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setUserData({ data: null, status: Status.IDLE });
  };

  return (
    <CardWrap>
      <div className="card">
        <button className="card__button--close" onClick={handleClose}>
          X
        </button>
        <img className="card__image" src={avatar_url} alt="profile" />
        <h2 className="card__name">{name}</h2>
        <p className="card__login">{login}</p>
        <p className="card__bio">{bio}</p>
        <a
          className="card__link"
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>
        <div className="card__wrap">
          <div className="card__followers">
            <p className="card__title">Followers</p>
            <p>{followers}</p>
          </div>
          <div className="card__following">
            <p className="card__title">Following</p>
            <p>{following}</p>
          </div>
          <div className="card__repos">
            <p className="card__title">Repos</p>
            <p>{public_repos}</p>
          </div>
        </div>
      </div>
    </CardWrap>
  );
}

const CardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 8px 8px 0px 0px ${() => colors.gray};
    border: 1px solid ${() => colors.gray};
    width: 400px;
    height: 500px;
    margin-top: 30px;
    border-radius: 20px;
    animation: appear 1s ease-out;
  }
  .card__button--close {
    position: absolute;
    margin-left: 340px;
    margin-top: 12px;
    border: none;
    background-color: ${() => colors.gray};
    color: ${() => colors.background};
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    transition: all 0.5s ease-out;
  }
  .card__button--close:hover {
    background-color: ${() => colors.orange};
    transition: all 0.5s ease-out;
  }
  .card__image {
    width: 190px;
    height: 190px;
    border-radius: 100px;
    margin-top: 20px;
    padding: 5px;
    border: 1px solid ${() => colors.yellow};
  }
  .card__name {
    margin: 0px;
    margin-top: 10px;
  }
  .card__login {
    color: ${() => colors.lightYellow};
  }
  .card__bio {
    margin: 15px;
    width: 300px;
    text-align: center;
  }
  .card__link {
    color: ${() => colors.yellow};
    text-decoration: none;
    border: 2px solid ${() => colors.yellow};
    margin: 5px;
    padding: 5px 10px;
    height: 25px;
    line-height: 25px;
    border-radius: 10px;
  }
  .card__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin-top: 15px;
    background-color: ${() => colors.orange};
    color: ${() => colors.background};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
  }
  .card__title {
    font-weight: bold;
  }
  .card__following {
    margin: auto 30px;
  }
  @keyframes appear {
    from {
      transform: translateY(-10%);
      opacity: 0;
    } to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export default Card;
