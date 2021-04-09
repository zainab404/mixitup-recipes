import { getAllRecipeIds } from "../../lib/recipes"

export async function getStaticPaths() {
  console.log(getAllRecipeIds())
  const paths = getAllRecipeIds()
  return {
    paths,
    fallback: false
  }
}

export default function Recipe() {
  return <div>Hello World</div>
}





// import { getAllRecipieIds, getRecipieData } from "../../lib/recipes"

// // export async function getStaticProps({params}) {
// //   console.log("===============")
// //   const recipeData = getRecipieData(params.id)
// //   console.log("**************")
// //   console.log(params.id)
// //   return {
// //     props: {
// //       recipeData
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

// export default function Recipie({recipeData}) {
//   return (
//     <h1>{recipeData.title}</h1>
//   )
// }