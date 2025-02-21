interface ProductSectionProps {
  title: string;
  checkpoints: string[];
  imageSrc: string;  // Solo una imagen de fondo
  buttonText: string;
  buttonLink: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  imageSrc,
}) => {
  return (
    <section className="w-[650px] h-[500px] rounded-3xl overflow-hidden p-4">
      {/* Image Section */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url(${imageSrc})`,  // Usar solo una imagen
            backgroundPosition: 'center',
            backgroundSize: 'cover',  // Para asegurar que cubra toda la sección
          }}
        />
      </div>
    </section>

  );
};

export default ProductSection;
