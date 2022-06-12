import styled from 'styled-components'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'
const { tabletM } = device

export const SkillCardContainer = styled.div`
  ${cssIndex.flexCenterCol}
  align-items: flex-start;
  background-image: linear-gradient(
    160deg,
    var(--white) 0%,
    var(--greyMedium) 250%
  );
  padding: 1rem 3rem 5rem;
  border-radius: 10px;
  box-shadow: var(--shadowBoxOne);
  width: 100%;
  position: relative;

  ${tabletM} {
    padding: 5rem 0;
    align-items: center;
  }

  // title
  & > .title-box {
    ${cssIndex.flexCenter}
    margin-bottom: .8rem;

    h1 {
      margin-left: 1.4rem;
    }

    .logo-img {
      padding: 1rem;
      max-width: 90px;
    }

    ${tabletM} {
      // position: absolute;
      h1 {
        font-size: 2.5rem;
      }

      .logo-img {
        padding: 0;
        max-width: 50px;
      }
    }
  }

  // description box
  & > .desc {
    //  position: absolute;
    width: 90%;
    margin-bottom: 2rem;
    border: solid var(--black) 2px;
    border-radius: 7px;
    padding: 1.5rem;
    box-shadow: var(--shadowBoxTwo);
    background-image: linear-gradient(
      270deg,
      white -50%,
      var(--greyMedium) 500%
    );

    ${tabletM} {
      width: 90%;
      padding: 1rem;
      text-align: center;
      font-size: 0.8em;
    }
  }

  // skills list heading

  .list-heading {
    margin-bottom: 1.5rem;
  }

  // bullet list
  & > ul {
    ${cssIndex.flexCenterCol}
    align-items: flex-start;
    width: 100%;

    li {
      margin-left: 5rem;
      margin-bottom: 1rem;
      width: 60%;
      list-style: disc;
    }

    ${tabletM} {
      align-items: center;

      li {
        margin-left: 0;
        width: 70%;

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`
