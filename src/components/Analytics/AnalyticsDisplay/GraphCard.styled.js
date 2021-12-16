import styled from "styled-components";
import { Card } from "../../../styles/UI/Card.styled";

export const Container = styled.div`
    &.analytics-container{
        display: flex;
        width: 100%;
        // height: 100%;
        margin: 0 auto;
        position: absolute;
        flex-flow: column;

        .analytics-container {
            &__sensors {
                display: flex;
                width: 100%;
                justify-content: space-around;
                background: gray;

                &-box {
                    border: 1px solid red;
                    padding: 10px;

                }
            }

            &__analysis {
                display: grid;
                height: 500px;
                grid-template-areas: 
                "graph graph performance"
                "graph graph performance"
                "dropdown dropdown floor";

                border: 1px solid red;

                &-graph {
                    grid-area: graph;
                    border: 1px solid red;
                }
                &-performance {
                    grid-area: performance;
                    border: 1px solid red;
                }
                &-dropdown {
                    grid-area: dropdown;
                    border: 1px solid red;
                }
                &-floor {
                    grid-area: floor;
                    border: 1px solid red;
                }
            }
        }
    }

`

// const Body = styled.div`
//     max-width: 100%;
//     margin: 0 auto;

//     .analytics {
//         margin: 8em;
//         position: absolute;
//         padding: 10px;
//         display: grid;
//         grid-template-areas:
//         "cards cards comp"
//         "cards cards comp";
//         font-style: normal;
//     }

//     .analytics{
//         background-color: #c58d8d;
//         display: flex;
//         gap: 5em;

//         &__cards {
//             display: grid;
//             gap: 30px;
//             grid-area: cards;
//             grid-template-areas: 
//             "desc btn"
//             "img img";

//             &__img {
//                 padding: 10px;
//                 background-color: white;
//                 width: 100%;
//                 height: 100px;
//                 grid-area: img;
//             }
//         }

//         &__desc {
//             padding: 20px;
//             background-color: #f1eff3;
//             border-radius: 8px;
//             max-width: 100%;
//             grid-area: desc;
//             /* margin: 10em; */
//             /* position: absolute; */
//             display: grid;
//             flex-direction: row;
//             background-color: #f0eeee
//             grid-template-areas:"card btn";
    
//             &__card {
//                 background-color: plum;
//                 width: 100%;
//                 grid-area: card;
//             }
            
//             &__btn {
//                 gap: 5px;
//                 width: 100%;
//                 background-color: pink;
//                 display: flex;
//                 padding: 3px;
//                 grid-area: btn;

//                 a {
//                     background-color: #bebebe;
//                     border-radius: 3px;
//                     text-decoration: none;
//                     color: black;
//                     margin: 0 auto;
//                     padding: 5px;
//                     width: 100%;
//                     font-size: 100%;
//                     height: 30px;
//                     display: block;
//                     flex-direction: row;   
                    
//                     &:hover{
//                     background-color: white;
//                 }
//             }
//         }
//     }

//     &__comp {
//         display: grid;
//         gap: 30px;
//         grid-area: comp
//         grid-template-areas:
//         "comproom"
//         "instaroom";

//         &__room{
//             padding: 20px;
//             display: block;
//             grid-area: comproom;
//             /* gap: 2em; */
//             border-radius: 8px;
//             background-color: white;
//         }

//         &__insta{
//             background-color: white;
//             border-radius: 2px;
//             grid-area: instaroom;
//         }
//     }
// }
// `

// export default Body;