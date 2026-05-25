const ITEMS = [
  { cls: "ch-amazon", text: "amazon" },
  { cls: "ch-otto", text: "OTTO" },
  { cls: "ch-kaufland", text: "Kaufland" },
  { cls: "ch-ebay", text: "ebay" },
  { cls: "ch-bol", text: "bol", small: ".com" },
  { cls: "ch-walmart", text: "Walmart" },
  { cls: "ch-shopify", text: "Shopify" },
  { cls: "ch-mediamarkt", text: "MediaMarkt" },
  { cls: "ch-hornbach", text: "HORNBACH" },
  { cls: "ch-cdiscount", text: "Cdiscount" },
  { cls: "ch-xxxlutz", text: "XXXLütz" },
  { cls: "ch-netto", text: "netto" },
];

export function Marquee({ label = "Aktiv auf →" }: { label?: string }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" data-reveal>
      <div className="marquee-label">{label}</div>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
            <span className={`ch-name ${item.cls}`}>
              {item.text}
              {item.small ? <small>{item.small}</small> : null}
            </span>
            <span className="ch-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
