import { getAllRecipieIds } from "../../lib/recipies"

export async function getStaticPaths() {
  console.log(getAllRecipieIds())
  const paths = getAllRecipieIds()
  return {
    paths,
    fallback: false
  }
}

export default function Recipie() {
  return <div>Hello World</div>
}





// import { getAllRecipieIds, getRecipieData } from "../../lib/recipies"

// // export async function getStaticProps({params}) {
// //   console.log("===============")
// //   const recipieData = getRecipieData(params.id)
// //   console.log("**************")
// //   console.log(params.id)
// //   return {
// //     props: {
// //       recipieData
// //     }
// //   }
// // }

// export async function getStaticPaths() {
//   const paths = getAllRecipieIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export default function Recipie({recipieData}) {
//   return (
//     <h1>{recipieData.title}</h1>
//   )
// }