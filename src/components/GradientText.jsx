export default function GradientText({ children }) {
  return (
    <span className="bg-[linear-gradient(105deg,#7049d7_3%,#d05f9b_48%,#f47755_92%)] bg-clip-text text-transparent">
      {children}
    </span>
  )
}
