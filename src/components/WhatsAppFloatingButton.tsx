import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  const whatsappLink = 'https://wa.me/919568978819?text=Hello%20SRM%20Global%20Hub';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppFloatingButton;
