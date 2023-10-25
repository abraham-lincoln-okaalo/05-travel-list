export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding items to your list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You have packed everything! On you go ✈️"
          : `💼 You have ${numItems} items on your list, and you have already packed
          ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
