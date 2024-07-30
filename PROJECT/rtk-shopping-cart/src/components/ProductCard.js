import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

export default function App() {
  const items = useSelector((state) => state.allcart.items);


  const dispatch = useDispatch()
  
  return (
    <div className="m-3">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item, index) => (
            <MDBCol key={index} size="4">
              <MDBCard>
                <MDBCardImage
                  src={item.img}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.text}
                  </MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
