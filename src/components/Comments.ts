import styled from 'styled-components'

export const Comments = styled.div`
  @media print {
    display: none;
  }
  .cactus-container {
    /* everything */
  }

  .cactus-error {
    background-color: darkred;
    color: white;
    color: #ff0000;
    border-radius: 0.4em;
    padding: 0.4em;
    margin-top: 0.4em;
  }


  /*
   * BUTTONS
   */
  .cactus-button {
    /* used on all buttons */
    font-size: 1em;
    font-weight: bold;
    border-radius: 0.4em;
    border: 2em;
    padding: 0.6em 1em 0.6em 1em;
    margin: 0;
  }

  .cactus-button:hover:not([disabled]) {
    opacity: 0.8;
    cursor: pointer;
  }

  div.cactus-view-more {
    /* contains the view-more button */
    padding-top: 1em;
    text-align: center;
  }


  /*
   * COMMENT EDITOR SECTION
   */
  .cactus-editor {
    /* comment text field, plus send and login buttons */
    display: flex;
    flex-direction: column;
  }

  .cactus-editor-textarea {
    width: 100%;
    height: 10rem;
    background: inherit;
    color: inherit;
  }

  .cactus-editor-textarea::placeholder {
    text-align: center;
    line-height: 9rem;
    font-size: 1.5em;
  }

  .cactus-editor-below {
    /* "use a matrix client", comment button, and login button */
    display: flex;
    justify-content: flex-end;
    padding: 0.5em;
  }

  .cactus-login-button {
  }
  .cactus-logout-button {
  }
  .cactus-send-button {
    margin-left: 1em;
  }


  /*
   * LOGIN FORM
   */
  .cactus-login-form {
    /* pop-up login form */
    padding: 2rem;
    border-radius: 0.5em;
    background-color: white;
    box-shadow: 0 0 1em #0005;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-content: space-between;

    /* place statically in viewport */
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translate(-50%, 0);
  }

  .cactus-login-form > h3 {
    text-align: center;
  }

  .cactus-login-field {
    padding-top: 0.5em;
  }

  .cactus-login-field > p {
    margin: 0;
  }

  .cactus-login-field > input {
    font-size: 1em;
    padding: 0.5em;
    border-radius: 0.4em;
    width: 100%;
  }

  .cactus-login-buttons {
    /* "back" and "log in" buttons in the login form */
    display: flex;
    align-content: stretch;
    padding-top: 1em;
    padding-bottom: 1em;

    --gap: 1em;
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  }

  .cactus-login-buttons > button {
    flex: 1;
    margin: var(--gap) 0 0 var(--gap);
    padding: 0.6em 0 0.6em 0;

    border-radius: 0.5em;
    border: 1px;
  }

  .cactus-matrixdotto-button {
    /* "Use a Matrix client" button */
    width: 100%;
  }


  /*
   * COMMENTS
   */
  .cactus-comment {
    /* a comment */
    display: flex;
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-top: 1em;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(127, 127, 127, 0.2);
  }

  .cactus-comment-avatar {
    /* avatar beside comment content */
    padding-left: 0;
    padding-right: 1rem;
  }

  .cactus-comment-avatar > * {
    /* the avatar image */
    margin: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .cactus-comment-avatar > p {
    /* in case of no avatar */
    background: black;
    color: white;
    text-align: center;
    line-height: 2.5rem;
  }

  .cactus-comment-content {
    /* stuff left of the avatar: header and body */
    display: flex;
    flex-direction: column;
  }

  .cactus-comment-header {
    /* user name and posting time */
    display: flex;
  }
  .cactus-comment-header > p {
    margin: 0;
    margin-bottom: 0.5em;
  }

  .cactus-comment-displayname {
    /* user name */
    font-weight: bold;
    padding-right: 0.5rem;
  }

  .cactus-comment-displayname > a {
    /* dont style link */
    text-decoration: none;
    color: inherit;
  }

  .cactus-comment-time {
    /* comment posting time  */
    opacity: 0.7;
  }

  .cactus-comment-body > * {
    /* text or media content of comment */
    margin: 0;
  }


  /* body for different message types */
  .cactus-message-text {
  }
  .cactus-message-text > p {
    margin-top: 0em;
  }
  .cactus-message-emote {
    padding-top: 0.5em;
    opacity: 0.7;
  }
  .cactus-message-image {
    max-width: 100%;
    height: auto;
  }
  .cactus-message-audio {
  }
  .cactus-message-file {
    line-height: 3em;
    margin-left: 1em;
  }
  .cactus-message-video {
    max-width: 100%;
  }

`
