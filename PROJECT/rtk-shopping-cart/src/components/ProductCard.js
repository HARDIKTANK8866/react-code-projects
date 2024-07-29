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
import { useSelector } from "react-redux";


export default function App() {
  const items = useSelector((state) => state.allcart.items);

  console.log(items);

  return (
    <div class="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          { items.map((item)=>(
              <MDBCol size="4">
              <MDBCard>
                <MDBCardImage
                  src={item.img}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
            }
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
