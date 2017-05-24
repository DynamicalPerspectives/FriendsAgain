// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================
//friend data based on Downton Abbey characters
var friends = [{
    name: "Lady Mary Crawley",
    photo: "https://s-media-cache-ak0.pinimg.com/736x/23/fd/20/23fd20012a1be71783f6b307a1e1729d.jpg",
    scores: ["5", "1", "5", "5", "4", "2", "5", "3", "1", "1"]
  },
  {
    name: "Lady Edith Crawley",
    photo: "http://vignette3.wikia.nocookie.net/downtonabbey/images/9/9a/Downton_Abbey_Laura_Carmichael_on_Lady_Edith.jpg/revision/latest?cb=20150302222845",
    scores: ["4", "3", "1", "3", "3", "5", "2", "5", "4", "2"]
  },
  {
    name: "Lady Sybil Crawley",
    photo: "http://23.21.192.150/masterpiece/downtonabbey/images/season2_characters_slideshow_sybil_08.jpg",
    scores: ["2", "1", "1", "3", "3", "3", "4", "4", "5", "5"]
  },
  {
    name: "John Bates",
    photo: "https://s-media-cache-ak0.pinimg.com/736x/4b/f0/22/4bf0229debee52bf6bb089f6be156f8a.jpg",
    scores: ["5", "2", "5", "1", "1", "4", "5", "5", "4", "3"]
  },
  {
    name: "Anna Bates",
    photo: "http://images.fashionnstyle.com/data/images/full/32457/anna-bates.jpg",
    scores: ["5", "3", "1", "1", "2", "2", "5", "5", "3", "5"]
  },
  {
    name: "Violet Crawley- Dowager Countess of Grantham",
    photo: "http://cdn.playbuzz.com/cdn/c7d2f710-2463-47ce-9a27-49053bac22f4/af1c34a5-39cc-40af-8163-3f859d335d53.jpg",
    scores: ["5", "4", "5", "4", "5", "5", "1", "3", "5", "3"]
  },
  {
    name: "Robert Crawley, Earl of Grantham",
    photo: "http://23.21.192.150/masterpiece/downtonabbey/images/season2_characters_slideshow_robert_02.jpg",
    scores: ["5", "4", "1", "5", "5", "1", "3", "2", "3", "1"]
  },
  {
    name: "Cora Crawley, Countess of Grantham",
    photo: "http://i.dailymail.co.uk/i/pix/2011/09/10/article-0-0DD0959800000578-130_468x316.jpg",
    scores: ["5", "4", "1", "3", "2", "1", "3", "2", "1", "3"]
  },
  {
    name: "Isis, Golden Labrador Retriever",
    photo: "http://d2buyft38glmwk.cloudfront.net/media/cms_page_media/2014/3/6/mast-da-s4-unsung-heroes-isis-02.jpg",
    scores: ["1", "5", "1", "5", "5", "1", "5", "5", "1", "5"]
  },
  {
    name: "Mrs. Hughes",
    photo: "http://static2.hypable.com/wp-content/uploads/2014/01/downton-abbey-season-4-episode-4-mrs-hughes.jpg",
    scores: ["5", "1", "1", "1", "2", "3", "5", "5", "5", "3"]
  },
  {
    name: "Mrs. Patmore",
    photo: "http://d2buyft38glmwk.cloudfront.net/media/__sized/images/slideshows/da3-mrs-patmore-character/DA3_ss-mrspatmore-char-01-crop-648x327.jpg",
    scores: ["5", "4", "1", "1", "2", "3", "4", "5", "5", "2"]
  },

  {
    name: "Thomas Barrow",
    photo: "http://i1.mirror.co.uk/incoming/article6430747.ece/ALTERNATES/s615/James-Collier-as-under-butler-formerly-first-footman-Thomas-Barrow-in-Downton-Abbey.jpg",
    scores: ["3", "1", "5", "2", "2", "5", "2", "3", "5", "1"]
  },
  {
    name: "Carson",
    photo: "http://i.telegraph.co.uk/multimedia/archive/03434/3JimCarter_3434016b.jpg",
    scores: ["5", "5", "1", "1", "2", "3", "5", "5", "5", "2"]
  },
  {
    name: "Sarah O'Brien",
    photo: "http://23.21.192.150/masterpiece/downtonabbey/images/season2_characters_slideshow_obrien_07.jpg",
    scores: ["3", "1", "5", "2", "2", "5", "2", "3", "5", "1"]
  },
  {
    name: "Matthew Crawley",
    photo: "http://bethanyhagen.com/blog/wp-content/uploads/2012/01/Matthew-Crawley-downton-abbey-15932584-570-364.jpg",
    scores: ["3", "4", "1", "4", "2", "3", "2", "4", "3", "5"]
  },
  {
    name: "Tom Branson",
    photo: "http://images.radiotimes.com/namedimage/Downton_Abbey__Will_Branson_move_to_America_in_the_series_5_finale_.jpg?quality=85&mode=crop&width=620&height=374&404=tv&url=/uploads/images/original/60409.jpg",
    scores: ["3", "3", "2", "2", "2", "1", "2", "5", "4", "5"]
  },
];
// make it accessible to other files using require.
module.exports = friends;


// var friends = [
//   {
//     name: "Ahmed",
//     photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     scores: [
//       "5",
//       "1",
//       "4",
//       "4",
//       "5",
//       "1",
//       "2",
//       "5",
//       "4",
//       "1"
//     ]
//   },
//   {
//     name: "Jacob Deming",
//     photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
//     scores: [
//       "4",
//       "2",
//       "5",
//       "1",
//       "3",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2"
//     ]
//   },
//   {
//     name: "Jeremiah Scanlon",
//     photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
//     scores: [
//       "5",
//       "2",
//       "2",
//       "2",
//       "4",
//       "1",
//       "3",
//       "2",
//       "5",
//       "5"
//     ]
//   },
//   {
//     name: "Louis T. Delia",
//     photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
//     scores: [
//       "3",
//       "3",
//       "4",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2",
//       "2",
//       "3"
//     ]
//   },
//   {
//     name: "Lou Ritter",
//     photo: "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
//     scores: [
//       "4",
//       "3",
//       "4",
//       "1",
//       "5",
//       "2",
//       "5",
//       "3",
//       "1",
//       "4"
//     ]
//   },
//   {
//     name: "Jordan Biason",
//     photo: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
//     scores: [
//       "4",
//       "4",
//       "2",
//       "3",
//       "2",
//       "2",
//       "3",
//       "2",
//       "4",
//       "5"
//     ]
//   }
//
// ];
//
// // Here we export the array. This makes it accessible to other files using require.
// module.exports = friends;
