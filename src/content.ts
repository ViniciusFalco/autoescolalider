export const contactLinks = {
  whatsapp:
    'https://wa.me/553234217319?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20CNH.',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua%20Anan%C3%ADsia%20Fonseca%2C%2095%2C%20Centro%2C%20Cataguases%20-%20MG',
};

export const categories = [
  {
    name: 'Categoria A',
    description: 'Sua liberdade começa sobre duas rodas.',
    image: '/images/autoescola/categoria-a.png',
  },
  {
    name: 'Categoria B',
    description: 'Assuma o volante com mais confiança.',
    image: '/images/autoescola/categoria-b.png',
  },
] as const;

export const approvedStudents = [
  { image: '/approved/ap_1.png', alt: 'Aluna aprovada na Categoria B' },
  { image: '/approved/ap_2.jpg', alt: 'Aluno aprovado na Categoria B' },
  { image: '/approved/ap_3.jpg', alt: 'Aluna aprovada na Categoria A' },
] as const;

export const quickInfo = [
  { value: '23', suffix: 'anos', label: 'formando condutores' },
  { value: 'Mais de 15', suffix: 'mil', label: 'alunos aprovados' },
  { value: '100%', suffix: '', label: 'atendimento pelo WhatsApp' },
] as const;
