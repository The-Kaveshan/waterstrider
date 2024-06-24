export function PageTitle({ title, subtitle, position }) {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-medium tracking-tight text-gray">
        {title}
      </h1>
      <p className="mt-6 text-md md:text-lg text-gray-500">{subtitle}</p>
    </div>
  );
}
