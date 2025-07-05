// import { PlayEntry } from '@/service/types/play';
// import { MediaType, UserMedia } from '@/service/types/user';

// export function getCarouselImagesFromPlay(play: PlayEntry): UserMedia[] {
//   const images: UserMedia[] = [];

//   play.userEntries.forEach((userEntry) => {
//     const { user, quantity } = userEntry;
//     const media = user.media?.find((x) => x.type === MediaType.Avatar);

//     if (media) {
//       for (let i = 0; i < quantity; i++) {
//         images.push(media);
//       }
//     }
//   });

//   return images;
// }
