export interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  avatarColor: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
}

export const conversations: Conversation[] = [
  {
    id: '1',
    name: 'InesPNJ 🌿',
    avatar: '🌿',
    avatarColor: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    lastMessage: 'Être aveugle c\'est un peu comme avoir les yeux fermés finalement',
    timestamp: '14:32',
    unread: 2,
    messages: [
      { id: '1', text: 'Yo Mino, t\'es dispo ce soir ?', timestamp: '14:15', isSent: false },
      { id: '2', text: 'Ouais, on fait quoi ?', timestamp: '14:16', isSent: true },
      { id: '3', text: 'J\'ai ramené un petit truc 🌿', timestamp: '14:18', isSent: false },
      { id: '4', text: 'Ah ouais ? C\'est quoi ?', timestamp: '14:20', isSent: true },
      { id: '5', text: 'Un bang 💨', timestamp: '14:22', isSent: false },
      { id: '6', text: 'Mdrrr t\'es folle', timestamp: '14:25', isSent: true },
      { id: '7', text: 'Tu connais 😎', timestamp: '14:28', isSent: false },
      { id: '8', text: 'Ça va être une soirée de ouf', timestamp: '14:30', isSent: true },
      { id: '9', text: 'Être aveugle c\'est un peu comme avoir les yeux fermés finalement', timestamp: '14:32', isSent: false },
    ]
  },
  {
    id: '2',
    name: 'Giuseppe 🇮🇹',
    avatar: '🇮🇹',
    avatarColor: 'linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)',
    lastMessage: 'C\'est marrant ça câlina 😏',
    timestamp: '12:45',
    unread: 0,
    messages: [
      { id: '1', text: 'Minotaure mon frère ❤️', timestamp: '12:30', isSent: false },
      { id: '2', text: 'Giuseppe ! Ça va ou quoi ?', timestamp: '12:31', isSent: true },
      { id: '3', text: 'Trop bien, j\'ai pensé à toi aujourd\'hui', timestamp: '12:33', isSent: false },
      { id: '4', text: 'Ah ouais ? Pourquoi ça ?', timestamp: '12:35', isSent: true },
      { id: '5', text: 'J\'ai vu un taureau à la télé mdrr', timestamp: '12:37', isSent: false },
      { id: '6', text: 'Très drôle... 🙄', timestamp: '12:39', isSent: true },
      { id: '7', text: 'Non mais sérieux, je veux qu\'il m\'encule le minotaure', timestamp: '12:41', isSent: false },
      { id: '8', text: 'PARDON ??? 😳', timestamp: '12:43', isSent: true },
      { id: '9', text: 'C\'est marrant ça câlina 😏', timestamp: '12:45', isSent: false },
    ]
  },
  {
    id: '3',
    name: 'Salistoire 📞',
    avatar: '📞',
    avatarColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    lastMessage: '🎵 *sonnerie de téléphone* 🎵',
    timestamp: 'Hier',
    unread: 1,
    messages: [
      { id: '1', text: 'Sah Mino', timestamp: 'Hier 22:10', isSent: false },
      { id: '2', text: 'Yoo', timestamp: 'Hier 22:12', isSent: true },
      { id: '3', text: '🎵 *sonnerie de téléphone* 🎵', timestamp: 'Hier 22:15', isSent: false },
      { id: '4', text: 'Euh... pourquoi tu m\'envoies ça ?', timestamp: 'Hier 22:18', isSent: true },
      { id: '5', text: '🎵 *sonnerie de téléphone* 🎵', timestamp: 'Hier 22:20', isSent: false },
      { id: '6', text: 'T\'es bizarre toi 😂', timestamp: 'Hier 22:23', isSent: true },
      { id: '7', text: 'C\'est ma signature voyons', timestamp: 'Hier 22:25', isSent: false },
      { id: '8', text: 'Ah bah oui logique', timestamp: 'Hier 22:28', isSent: true },
      { id: '9', text: 'Tu viens demain ?', timestamp: 'Hier 22:30', isSent: true },
      { id: '10', text: '🎵 *sonnerie de téléphone* 🎵', timestamp: 'Hier 22:35', isSent: false },
    ]
  },
  {
    id: '4',
    name: 'Brocoline 🥦',
    avatar: '🥦',
    avatarColor: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    lastMessage: 'f',
    timestamp: 'Lundi',
    unread: 0,
    messages: [
      { id: '1', text: 'Salut', timestamp: 'Lundi 18:00', isSent: true },
      { id: '2', text: 'f', timestamp: 'Lundi 18:05', isSent: false },
      { id: '3', text: 'Ça va ?', timestamp: 'Lundi 18:08', isSent: true },
      { id: '4', text: 'f', timestamp: 'Lundi 18:12', isSent: false },
      { id: '5', text: 'Tu fais quoi ce soir ?', timestamp: 'Lundi 18:15', isSent: true },
      { id: '6', text: 'f', timestamp: 'Lundi 18:20', isSent: false },
      { id: '7', text: 'Ok je comprends 😂', timestamp: 'Lundi 18:22', isSent: true },
      { id: '8', text: 'f', timestamp: 'Lundi 18:28', isSent: false },
      { id: '9', text: 'Tu sais dire autre chose ?', timestamp: 'Lundi 18:32', isSent: true },
      { id: '10', text: 'f', timestamp: 'Lundi 23:40', isSent: false },
    ]
  },
  {
    id: '5',
    name: 'Alaia_Jeanneau 🥤',
    avatar: '🥤',
    avatarColor: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
    lastMessage: 'J\'ai cassé le carrelage en tuant un moustique…',
    timestamp: '20/12',
    unread: 3,
    messages: [
      { id: '1', text: 'MINOOO', timestamp: '20/12 09:00', isSent: false },
      { id: '2', text: 'Quoi quoi quoi ?', timestamp: '20/12 09:05', isSent: true },
      { id: '3', text: 'Tu veux un Docteur Pepper ?', timestamp: '20/12 09:08', isSent: false },
      { id: '4', text: 'Euh... random mais pourquoi pas', timestamp: '20/12 09:10', isSent: true },
      { id: '5', text: 'C\'est la meilleure boisson du monde 🥤', timestamp: '20/12 09:15', isSent: false },
      { id: '6', text: 'Si tu le dis 😂', timestamp: '20/12 09:18', isSent: true },
      { id: '7', text: 'Sinon devine ce qui m\'est arrivé', timestamp: '20/12 09:22', isSent: false },
      { id: '8', text: 'Vas-y raconte', timestamp: '20/12 09:25', isSent: true },
      { id: '9', text: 'Y\'avait un moustique chez moi', timestamp: '20/12 09:30', isSent: false },
      { id: '10', text: 'Et ?', timestamp: '20/12 15:00', isSent: true },
      { id: '11', text: 'J\'ai cassé le carrelage en tuant un moustique…', timestamp: '20/12 18:40', isSent: false },
    ]
  }
];
