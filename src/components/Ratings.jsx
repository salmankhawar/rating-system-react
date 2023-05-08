export default function Ratings({ ratingOptions, clicked }) {
  return (
    <div className="step-1">
      <h3>Please rate your experience</h3>
      <div className="rating">
        {ratingOptions.map((r, i) => (
          <button key={i} onClick={(e) => clicked(e, r)}>
            {r}
          </button>
        ))}
      </div>
    </div>
  )
}
