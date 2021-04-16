import styled from '@emotion/styled';

export const Container: any = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.7);
  top:0;
  padding-top:10%;

  .modal-options{
   width:545px;
   background-color:#fff;
  .modal-header{
    background-color:#000;
    margin-bottom:5px;
  .close-modal{
    width:22px;
    height:22px;
    background-color:#b60202;
    font-size:14px;
  }
  }
   .images-container{
     padding-left:5px;
   }
   .modal-title{
       font-size:20px;
       font-weight:700;
       font-weight: bold;
   }
   .modal-image-container{
    width:130px;
    height:${(props: any) => props.imageHeight ? props.imageHeight : '100px'};
    margin-right:5px;
    margin-bottom:5px; 
    border:1px solid #ccc;
       &:last-of-type{
           margin-right:none;
       }
   }
   .modal-image{
       width:100%;
       height:100%;
       
   }
   .shadow-image{
     width:130px;
     height:100%;
     background-color:rgba(0,0,0,.6);
     top:0;
     font-size:25px;
     cursor: pointer;
   }
   }
   .selected-image{
     top:0;
     cursor: pointer;
     background-image:url(${(props: any) => props.selectedImage ? props.selectedImage : 'https://wi.wallpapertip.com/wsimgs/14-141528_7-wallpapers-hd-para-computadora-de-el-iphone.png'});
     background-size:cover;
     height:300px;
     .fa-arrow-left{
       left:10px;
       top:10px;
       width:50px;
     }
     .send-button{
       width:40px;
       height:40px;
       background:#075E54;
       bottom:20px;
       right:25px;
       box-shadow: -1px 1px 6px -1px rgba(0,0,0,0.75);
       transition:.4s all;
       &:active{
         transform:scale(.8);
       }
       .fa-paper-plane{
         font-size:14px;
         padding-right:3px;
       }

     }
   }
   .second-send{
    width:40px;
    height:40px;
    background:${(props: any) => props.bgSend ? props.bgSend : 'grey'};
    z-index:10000;
    right:2px;
    bottom:2px;
    transition:.4s all;

    .send-icon{
      font-size:14px;
         padding-right:3px;
    }
   }
   .active-button{
      &:active{
        transform:scale(.8);
       }
    }

    .selected-image-text{
      height:320px;
      top:0;
      display:flex;
      .left-arrow{
         left:10px;
         top:10px;
         width:50px;
        }
      .finish-button{
        background-color: red;
        width:40px;
        height:40px;
        background:#075E54;
        background:${(props: any) => props.bgSend2 ? props.bgSend2 : 'grey'};
        bottom:20px;       
        right:25px;
        box-shadow: -1px 1px 6px -1px rgba(0,0,0,0.75);
        transition:.4s all;
          .fa-paper-plane{
          font-size:14px;
          padding-right:3px;
        }
      }
      .image-text,.description{
        width:50%;
      }
      .description{
        border:1px solid #ccc;
        padding:10px;
        font-size:14px;
        resize:none;
        height:320px;
        &:focus{
          outline:none;
      
        }
      }
    }
    .active-button{
      &:active{
        transform:scale(.8);
       }
    }
  

`;





// import styled from '@emotion/styled';

// export const Container: any = styled.div`
//   position:absolute;
//   width:100%;
//   height:100%;
//   background-color:rgba(0,0,0,.7);
//   top:0;
//   padding-top:10%;

//   .modal-options{
//    width:545px;
//    background-color:#fff;
//   .modal-header{
//     background-color:#000;
//     margin-bottom:5px;
//   .close-modal{
//     width:22px;
//     height:22px;
//     background-color:#b60202;
//     font-size:14px;
//   }
//   }
//    .images-container{
//      padding-left:5px;
//    }
//    .modal-title{
//        font-size:20px;
//        font-weight:700;
//        font-weight: bold;
//    }
//    .modal-image-container{
//     width:130px;
//        height:${(props: any) => props.imageHeight ? props.imageHeight : '100px'};
//    }
//    .modal-image{
//        width:130px;
//        height:${(props: any) => props.imageHeight ? props.imageHeight : '100px'};
//        margin-right:5px;
//        margin-bottom:5px; 
//        border:1px solid #ccc;
//        padding:5px;
//        &:last-of-type{
//            margin-right:none;
//        }
//    }
//    .shadow-image{
//      width:130px;
//      height:100%;
//      border:1px solid red;
//    }
//    }
//    .selected-image{
//      top:0;
//      cursor: pointer;
//      background-image:url(${(props: any) => props.selectedImage ? props.selectedImage : 'https://wi.wallpapertip.com/wsimgs/14-141528_7-wallpapers-hd-para-computadora-de-el-iphone.png'});
//      background-size:cover;
//      height:300px;
//      .fa-arrow-left{
//        left:10px;
//        top:10px;
//        width:50px;
//      }
//      .send-button{
//        width:40px;
//        height:40px;
//        background:#075E54;
//        bottom:20px;
//        right:25px;
//        box-shadow: -1px 1px 6px -1px rgba(0,0,0,0.75);
//        transition:.4s all;
//        &:active{
//          transform:scale(.8);
//        }
//        .fa-paper-plane{
//          font-size:14px;
//          padding-right:3px;
//        }

//      }
//    }

// `;