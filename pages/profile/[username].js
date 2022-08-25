import { useRouter } from "next/router"


const profile= () => {
    const router = useRouter()
    const {username} = router.query
  return (
    <div>nama :{username}</div>
  )
}

export default profile