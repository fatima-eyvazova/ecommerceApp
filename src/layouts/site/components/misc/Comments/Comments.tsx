// react-icons
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import {
  AiOutlinePicture,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import { FaItalic, FaStrikethrough, FaLink, FaCode } from "react-icons/fa6";
import { MdFormatUnderlined } from "react-icons/md";
import { FaEyeSlash, FaRegQuestionCircle, FaCaretDown } from "react-icons/fa";
import { RiDoubleQuotesL, RiDisqusFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";

import "./Comments.scss";

const Comments = () => {
  return (
    <section className="comments">
      <div className="container">
        <ul className="nav">
          <li className="comment">
            <span className="comment-count">0 comments</span>
          </li>
          <li className="login">
            <span>
              <TbMessageCircle2Filled className="login-icon" />
            </span>
            <select>
              <option value="login">Login</option>
              <option value="disqus">Disqus</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
            </select>
            <FaCaretDown className="icon" />
          </li>
        </ul>
        <div className="posts">
          <div className="compose-wrapper">
            <div className="avatar">
              <p>G</p>
            </div>
            <div className="textarea-wrapper">
              <textarea
                id="w3review"
                name="w3review"
                rows={4}
                cols={50}
              ></textarea>
              <div className="post-actions">
                <div className="left">
                  <div className="icon-gif-picture">
                    <MdOutlineGifBox className="icon" />
                    <AiOutlinePicture className="icon" />
                  </div>
                  <div className="text-editor-buttons">
                    <BiBold className="icon" />
                    <FaItalic className="icon" />
                    <MdFormatUnderlined className="icon" />
                    <FaStrikethrough className="icon" />
                    <FaLink className="icon" />
                    <FaEyeSlash className="icon" />
                    <FaCode className="icon" />
                    <RiDoubleQuotesL className="icon" />
                  </div>
                </div>
                <div className="right">
                  <button>Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
