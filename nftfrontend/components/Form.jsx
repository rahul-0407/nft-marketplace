import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import Button from "@/components//Button";

const Form = () => {
  return (
    <div className="Form">
      <div class="Form_box">
        <form action="">
          <div className="Form_box_input">
            <label htmlFor="name">Username</label>
            <input type="text" placeholder="Rahul Kumar" className="Form_box_input_userName"/>
          </div>

          <div class="Form_box_input">
            <label htmlFor="email">Email</label>
            <div className="Form_box_input_box">
              <div class="Form_box_input_box_icon">
                <HiOutlineMail/>
              </div>
              <input type="text"  placeholder="Email*" />
            </div>
          </div>

          <div class="Form_box_input">
            <label htmlFOr="description">Description</label>
            <textarea type="text" cols="30" rows="6" placeholder="something about yourself in few words"></textarea>
          </div>

          <div class="Form_box_input">
            <label htmlFor="website">Website</label>
            <div class="Form_box_input_box">
              <div class="Form_box_input_box_icon">
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder="website"/>
            </div>
          </div>

          <div class="Form_box_input_socail">
            <div class="Form_box_input">
              <label htmlFor="facebook">Facebook</label>
              <div class="Form_box_input_box">
                <div class="Form_box_input_box_icon">
                  <TiSocialFacebook/>
                </div>
                <input type="text" placeholder="http://rahul"/>
              </div>
            </div>
            <div class="Form_box_input">
              <label htmlFor="twitter">Twitter</label>
              <div class="Form_box_input_box">
                <div class="Form_box_input_box_icon">
                  <TiSocialTwitter/>
                </div>
                <input type="text" placeholder="http://rahul"/>
              </div>
            </div>
            <div class="Form_box_input">
              <label htmlFor="instagram">Instagram</label>
              <div class="Form_box_input_box">
                <div class="Form_box_input_box_icon">
                  <TiSocialInstagram/>
                </div>
                <input type="text" placeholder="http://rahul"/>
              </div>
            </div>
          </div>

          <div class="Form_box_input">
            <label htmlFor="wallet">Wallet Address</label>
            <div class="Form_box_input_box">
              <div class="Form_box_input_box_icon">
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder="0x095418A82BC2439703b69fbE1210824F2247D77c"/>
              <div class="Form_box_input_box_icon">
                <MdOutlineContentCopy/>
              </div>
            </div>
          </div>

          <div class="Form_box_btn">
            <Button btnName="Upload Profile" handleClick={()=>{}} classStyle="button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
