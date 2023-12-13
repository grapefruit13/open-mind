export default function UserProfileImg({ size, alt }) {
  const src = '/assets/sampleProfile.png';

  const imageSizeStyle = {
    width: `${size / 10}rem`,
    height: 'auto',
  };

  return (
    <div>
      <img src={src} alt={alt} style={imageSizeStyle} />
    </div>
  );
}
