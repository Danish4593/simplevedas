import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Grid, Tabs, Tab } from "@mui/material";
import { People, EmojiEvents, MenuBook, School, Phone, Email, Schedule } from "@mui/icons-material";
import simpleVedasImg from "../assets/images/simple-vedas.jpg";
import abouth from "../assets/images/abouth.jpg";
import srilaPrabhupadaImg from "../assets/images/Srila-Prabhupada.jpg";
import madhusudanaVisnuDasImg from "../assets/images/madhusudan-visnu-dev.png";
import PageHeader from "./PageHeader";
import NewsLetter from "./NewsLetter";

export default function About() {
  const { slug } = useParams();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const getContent = () => {
    switch (slug) {
      case "simple-vedas":
        return (
          <>
           <PageHeader backgroundImage={abouth} title="Simple Vedas" />
          <Box className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full max-w-[1200px] mx-auto p-4 md:p-6 border border-gray-300 rounded-lg mt-6 overflow-hidden">
            <Box className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 w-full p-4">
              {/* Left side - Text Box */}
              <Box className="flex-1 md:flex-[0_0_55%] p-4 md:p-6 flex flex-col overflow-hidden">
                <Typography 
                  component="div"
                  className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight [&>p]:mt-0 [&>p]:mb-2 [&>p:first-of-type]:mt-0 [&>strong]:font-semibold"
                >
                  <p>
                    <strong>Veda</strong> means knowledge. Any knowledge we accept is{" "}
                    <strong>Veda</strong>, for the teachings of the Vedas are the original
                    knowledge. The knowledge found therein is both physical and
                    metaphysical. Thus, for ages, people have accepted the Vedas
                    and have been benefited.
                  </p>

                  <p>
                    Simple Vedas is an initiative to avail the ancient spiritual
                    techniques given in the Vedas to the people of the modern times.
                    As the name suggests, Simple Vedas aims to make the Vedas
                    simple without losing the depth of the message that it offers
                    to human society.
                  </p>

                  <p>
                    The secrets of the <strong>Gita</strong>, the mysteries of the{" "}
                    <strong>Puranas</strong>, the life lessons from the{" "}
                    <strong>Ramayana</strong> and the <strong>Mahabharata</strong>, the synthesis
                    of science and spirituality, the complexities of the{" "}
                    <strong>Upanishads</strong> and the <strong>Vedanta</strong>, spiritual
                    practices, such as mindfulness, yoga, inner healing, chanting
                    of Vedic hymns, and so much more will be served at Simple Vedas.
                  </p>

                  <p>
                    The purpose of Simple Vedas is to serve as a bridge between
                    the ancient and the modern, between the spiritual and the
                    material, between the philosophy and the practice, so that one can easily
                    understand, appreciate, and apply the Vedic technologies in
                    one's life, bringing to it more meaning and content, and thus enjoy the
                    bliss that we all are really made for.
                  </p>
                </Typography>
              </Box>

              {/* Right side - Image */}
              <Box className="flex-1 md:flex-[0_0_40%] p-4 md:p-6 flex justify-center items-stretch overflow-hidden">
                <Box
                  component="img"
                  src={simpleVedasImg}
                  alt="Simple Vedas"
                  className="w-full h-auto object-cover block max-w-full"
                />
              </Box>
            </Box>
          </Box>

          {/* Success Stats Section */}
          <Box className="mt-16 mb-12 text-center">
            <Typography variant="h3" className="font-extralight text-center text-2xl md:text-3xl text-[#1a1a1a]">
              Our Success Ratio
            </Typography>
            
            <Typography 
              variant="body1" 
              className="text-[#b71c1c] mb-12 text-xs md:text-sm max-w-[900px] mx-auto font-extralight"
            >
              We measure our success through the satisfaction of our students. When they refer someone, we feel elated!
            </Typography>

            <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
              <Grid container spacing={{ xs: 3, md: 5 }} className="justify-between">
                {/* Happy Students */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <People className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                        12966+
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                        Happy Students
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Classes Completed */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <EmojiEvents className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                        882+
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                        Classes Completed
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Courses Available */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <MenuBook className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                        20+
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                        Courses Available
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          </>
        );
      
      case "srila-prabhupada":
        return (
          <>
            <PageHeader backgroundImage={abouth} title="Srila Prabhupada" />

            <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8 border border-[#F5A623] rounded-lg p-6">
              {/* Main Content */}
              <Box className="py-4">
                <Typography 
                  variant="h3" 
                  className="font-extralight text-center text-2xl md:text-3xl text-[#1a1a1a] mb-2 text-2xl md:text-[2.2rem] font-bold text-left flex items-center gap-4"
                >
                  <Box component="span" className="font-bold">HIS DIVINE GRACE</Box> 
                  <Box component="span" className="text-[#F5A623] font-bold">SRILA PRABHUPADA</Box>
                  <Box className="w-10 md:w-[60px] h-0.5 bg-[#F5A623]" />
                </Typography>
                
                <Typography 
                  variant="h6" 
                  className="text-left mb-4 text-sm md:text-base text-black font-bold"
                >
                  Founder-acharya of International Society for Krishna Consciousness
                </Typography>
              </Box>

                {/* Image and Introduction */}
                <Box className="flex flex-col md:flex-row gap-8 mb-10 border border-[#F5A623] rounded-lg p-0 items-stretch">
                  {/* Text on Left */}
                  <Box className="flex-1 min-w-0 border border-[#F5A623] rounded-lg p-0 flex flex-col">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                      Srila Prabhupada – At various times people have called him a scholar, a philosopher, a cultural ambassador, a prolific author, a religious leader, a spiritual teacher, a social critic, and a holy man. In truth, he was all these things and more.
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-4">
                      He is regarded as the world's pre-eminent exponent of the teachings and practices of <em>Bhakti-yoga</em> and Vedic Knowledge, outside of its roots in India. We invite you to know a little more about him;
                    </Typography>

                    {/* A Lifetime of Preparation */}
                    <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-[#F5A623] border-b-2 border-[#F5A623] inline-block pb-1">
                      A Lifetime of Preparation
                    </Typography>
                    
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                      Born as Abhay Charan De on September 1, 1896, in Calcutta, as a young man he joined Mahatma Gandhi's civil disobedience movement. In 1922, a meeting with the prominent scholar and spiritual leader, Srila Bhaktisiddhanta Sarasvati, proved to be most influential on young Abhay's future calling.
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                      Srila Bhaktisiddhanta was a leader in the <em>Gaudiya Vaishnava</em> community, a monotheistic tradition within the broader Hindu culture. At their very first meeting, Srila Bhaktisiddhanta asked Abhay to bring the teachings of Lord Krishna to the English-speaking world. Deeply moved by his devotion and wisdom, Abhay became a disciple of Srila Bhaktisiddhanta in 1933, and resolved to carry out his mentor's request. Abhay, later known by the honorific A.C. Bhaktivedanta Swami Prabhupada, spent the next 32 years preparing for his journey west.
                    </Typography>
                  </Box>

                  {/* Image on Right */}
                  <Box className="flex-1 flex justify-center items-stretch min-w-0 h-full">
                    <img
                      src={srilaPrabhupadaImg}
                      alt="Srila Prabhupada"
                      className="w-full h-full object-cover rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    />
                  </Box>
                </Box>

                {/* A Historic Voyage */}
                <Box className="mb-8 border border-[#F5A623] rounded-lg p-0">
                  <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-[#F5A623] border-b-2 border-[#F5A623] inline-block pb-1">
                    A Historic Voyage
                  </Typography>
                  
                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                    In 1965, at the age of 69, Srila Prabhupada travelled to New York City aboard a cargo ship. The journey was treacherous, and the elderly spiritual teacher suffered 2 heart attacks aboard ship. Arriving in the United States with just 7 dollars in Indian rupees and his translations of sacred Sanskrit texts, he began to spread the teachings of Krishna consciousness. His spiritual message resonated with many young people, some of whom came forward to become serious students of the Krishna tradition. With the help of these students, Srila Prabhupada rented a small storefront on New York's Lower East Side to use as a temple.
                  </Typography>
                </Box>

                {/* A World Acharya */}
                <Box className="mb-8 border border-[#F5A623] rounded-lg p-0">
                  <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-[#F5A623] border-b-2 border-[#F5A623] inline-block pb-1">
                    A World Acharya
                  </Typography>
                  
                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                    In July of 1966, Bhaktivedanta Swami established the International Society for Krishna Consciousness (ISKCON) for the purpose he stated of <em>"checking the imbalance of values in the world and working for real unity and peace".</em>
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                    In the eleven years that followed, Srila Prabhupada circled the globe 14 times on lecture tours spreading the teachings of Lord Krishna. Men and women from all backgrounds and walks of life came forward to accept his message. With their help, Srila Prabhupada established temples, farm communities, a publishing house, and educational institutions around the world. And, he began what has now become the world's largest vegetarian food relief program, Hare Krishna Food for Life.
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                    With the desire to nourish the roots of Krishna consciousness in its home, Srila Prabhupada returned to India several times, where he sparked a revival in the <em>Vaishnava</em> tradition. In India, he opened dozens of temples, including large centres in the holy towns of Vrindavan and Mayapura.
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                    Srila Prabhupada's most significant contributions, perhaps, are his books. He authored over 70 volumes on the Krishna tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition, and clarity. Several of his works are used as textbooks in numerous university courses. His writings have been translated into 76 languages. His most prominent works include: <em>Bhagavad-gita As It Is</em>, the 30-volume <em>Srimad-bhagavatam</em>, and the 17-volume <em>Sri Caitanya-caritamrita</em>.
                  </Typography>
                </Box>

                {/* A Saint never dies */}
                <Box className="mb-8 border border-[#F5A623] rounded-lg p-0">
                  <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-[#F5A623] border-b-2 border-[#F5A623] inline-block pb-1">
                    A Saint never dies
                  </Typography>
                  
                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-2">
                    Though Srila Prabhupada passed away on November 14, 1977, in the holy town of Vrindavan, surrounded by his loving disciples and followers, he is still alive in the form of his teachings, and also in the hearts of millions of people who follow him. While he was physically alive, he touched the hearts of many by his wisdom and saintly qualities, and he still continues to inspire us all through his teachings.
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                    For millennia, the teachings of Bhakti had been concealed within Sanskrit and Indian vernacular languages, and the rich culture of Bhakti had been hidden behind the borders of India. However, today, millions around the globe express their gratitude to Srila Prabhupada for revealing the timeless wisdom of Bhakti to a world immersed in a hedonistic and distracted ethos.
                  </Typography>
                </Box>

                {/* Quote */}
                <Box className="bg-[#f9f9f9] border border-[#F5A623] border-l-4 border-l-[#F5A623] p-4 md:p-6 mb-8 rounded">
                  <Typography 
                    variant="body1" 
                    className="italic leading-[1.8] text-xs md:text-sm text-[#333] mb-4 font-extralight"
                  >
                    "He was a genuine holy person with enormous integrity and compassion, and he had a powerful impact on those who met him. He never claimed authority and respect for himself; what he said and did was always in the name of Krishna…"
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="text-[0.75rem] md:text-xs text-[#666] font-extralight"
                  >
                    – Dr. Thomas J. Hopkins,<br />
                    Professor of Religious Studies (Emeritus), Franklin and Marshall College
                  </Typography>
                </Box>

                {/* Learn More Link */}
                <Typography 
                  variant="body1" 
                  className="text-center text-sm md:text-base text-[#333] font-extralight"
                >
                  More can be known about his life and activities at{" "}
                  <Box 
                    component="a" 
                    href="https://www.prabhupada.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F5A623] no-underline hover:underline"
                  >
                    https://www.prabhupada.net/
                  </Box>
                </Typography>
            </Box>
          </>
        );
      
      case "our-inspiration":
        return (
          <>
            <PageHeader backgroundImage={abouth} title="Our Inspiration" />

            <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
              {/* Gopal Krishna Goswami */}
              <Box className="mb-16 mt-8">
                <Typography 
                  variant="h3" 
                  className="font-extralight text-center mb-10 text-xl md:text-2xl text-[#1a1a1a]"
                >
                  HIS HOLINESS <Box component="span" className="text-[#F5A623]">GOPAL KRISHNA GOSWAMI</Box>
                </Typography>

                <Box className="flex flex-col md:flex-row gap-8 mb-10">
                  <Box className="flex-1 md:flex-[0_0_65%]">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-6">
                      His Holiness Gopal Krishna Goswami Maharaj was a senior disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He played a leading role in spreading the divine message of Bhagavad-gita As It Is. He graduated from Delhi University, and studied Business Management at the University of Paris in Sorbonne and later obtained his Master's degree in Business Administration from the McGill University of Montreal, Canada.
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                      Maharaja was ISKCON GBC (Governing Body Commissioner) of over thirty temples around the world and served as an initiating spiritual master, with thousands of disciples in Russia, America, Canada, Europe, Asia, Africa, Australia and New Zealand. Also, he was the Chairman and Trustee of the Bhaktivedanta Book Trust, the world's largest publisher and distributor of Vedic literature.
                    </Typography>
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/His-Holiness-Gopal-Krishna-Goswami-Maharaja-3.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Gopal Krishna Goswami"
                      className="w-full h-auto object-cover rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    />
                  </Box>
                </Box>
              </Box>

              {/* Divider */}
              <Box className="border-b-2 border-gray-300 mb-16" />

              {/* Bhakti Tirtha Swami */}
              <Box className="mb-16">
                <Typography 
                  variant="h3" 
                  className="font-extralight text-center mb-10 text-xl md:text-2xl text-[#1a1a1a]"
                >
                  HIS HOLINESS <Box component="span" className="text-[#F5A623]">BHAKTI TIRTHA SWAMI</Box>
                </Typography>

                <Box className="flex flex-col md:flex-row gap-8 mb-10">
                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2023/02/BT-Swami.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Tirtha Swami"
                      className="w-full h-auto object-cover rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    />
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_65%]">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-6">
                      His Holiness Bhakti Tirtha Swami was born John E. Favors in a pious, God-fearing family. He graduated from Princeton University and was then a leader in Dr. Martin Luther King Jr's civil rights movement. He was a charismatic spiritual leader who was known for his eclectic and dynamic preaching strategies. Widely acknowledged as a global specialist in international relations and conflict resolution, he became a spiritual consultant to many high-ranking members of the United Nations, celebrities, chiefs and kings around the world.
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                      He authored many books on leadership, practical spirituality, & his reflections on great holy scriptures. His passing away from this world was like his life, a deep expression of love and compassion, and a lesson for all of us. A lot more can be read about him in his official biography Black Lotus: The Spiritual Journey of an Urban Mystic.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Divider */}
              <Box className="border-b-2 border-gray-300 mb-16" />

              {/* Bhakti Dhira Damodara Swami */}
              <Box className="mb-12">
                <Typography 
                  variant="h3" 
                  className="font-extralight text-center mb-10 text-xl md:text-2xl text-[#1a1a1a]"
                >
                  HIS HOLINESS <Box component="span" className="text-[#F5A623]">BHAKTI DHIRA DAMODARA SWAMI</Box>
                </Typography>

                <Box className="flex flex-col md:flex-row gap-8 mb-10">
                  <Box className="flex-1 md:flex-[0_0_65%]">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mb-6">
                      His Holiness Bhakti Dhira Damodara Swami Maharaja, the first African <em>sannyasi</em> and <em>diksha-guru</em> in ISKCON, is a grand-disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He is known and appreciated for his humility, gravity and deep knowledge. He tours and preaches extensively in different countries in Africa, in Brazil, India, Mauritius, the Seychelles and the United States.
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight">
                      He also regularly teaches <em>Bhakti-śāstrī</em> and <em>Bhakti-vaibhava</em> courses at the Vrindavan Institute of Higher Education (VIHE) and the Mayapur Institute (MI) and facilitates numerous seminars on the practical aspects of Krishna consciousness philosophy, such as community-building, self-sufficiency, etc. Following the desire of his spiritual master, Maharaja is also developing vibrant Krishna conscious self-sustainable farm communities in Ghana and Nigeria, Africa.
                    </Typography>
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/Bhakti-Dhira-Damodara-Swami.jpeg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Dhira Damodara Swami"
                      className="w-full h-auto object-cover rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
        case "madhusudan-visnu-dev":
          return (
            <>
              <PageHeader backgroundImage={abouth} title="Madhusudana Visnu Das" />

              <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Main Title */}
                <Typography 
                  variant="h3" 
                  className="font-bold text-center mt-8 mb-2 text-2xl md:text-[2.2rem] text-[#1a1a1a]"
                >
                  MADHUSUDANA VISNU <Box component="span" className="text-[#F5A623]">DAS</Box>
                </Typography>
                
                <Typography 
                  variant="h6" 
                  className="text-center mb-8 text-sm md:text-base text-[#666] italic"
                >
                  Bhakti-yogi, Monk, Teacher, Writer, and Spiritual Lifestyle Coach
                </Typography>

                {/* Content Layout */}
                <Box className="flex flex-col md:flex-row gap-8 mb-10">
                  {/* Image on Left */}
                  <Box className="flex-1 md:flex-[0_0_35%] flex justify-center items-start">
                    <Box
                      component="img"
                      src={madhusudanaVisnuDasImg}
                      alt="Madhusudana Visnu Das"
                      className="w-full h-auto object-cover rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    />
                  </Box>

                  {/* Tabs on Right */}
                  <Box className="flex-1 md:flex-[0_0_60%]">
                    <Box className="border-b border-gray-300">
                      <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange}
                        className="[&_.MuiTab-root]:text-xs md:[&_.MuiTab-root]:text-sm [&_.MuiTab-root]:font-extralight [&_.MuiTab-root]:text-[#666] [&_.MuiTab-root.Mui-selected]:text-[#F5A623] [&_.MuiTabs-indicator]:bg-[#F5A623]"
                      >
                        <Tab label="About Me" />
                        <Tab label="Experience" />
                        <Tab label="Contact" />
                      </Tabs>
                    </Box>

                    {/* Tab Panel 0 - About Me */}
                    {tabValue === 0 && (
                      <Box className="py-6">
                        <Box
                          component="ul"
                          className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight list-outside pl-6 [&>li]:mb-3 [&>li]:leading-[1.8] [&>em]:italic"
                        >
<li>Graduated as B. Tech in Computer Engineering from SVNIT, Surat (2007-11);</li>
<li>Had a great break in TCS (Tata Consultancy Services) on graduation;</li>
<li>Worked as an Academic Instructor in Mumbai for 4 years;</li>
<li><em>Bhakti-yogi</em> since 2008, Monk since 2016;</li>
<li>Studied <em>Bhakti-sastri</em> at VIHE, Vrindavan;</li>
<li>At present a teacher at reputed institutes such as VIHE (Vrindavan Institute for Higher Education), IBMV (ISKCON Bhagavat Mahavidyalaya);</li>
<li>Director at Simple Vedas.</li>
                        </Box>
                      </Box>
                    )}

                    {/* Tab Panel 1 - Experience */}
                    {tabValue === 1 && (
                      <Box className="py-6">
                        <Box
                          component="ul"
                          className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight list-outside pl-6 [&>li]:mb-3 [&>li]:leading-[1.8]"
                        >
<li>Have been teaching since age 16;</li>
                          <li>Given numerous seminars in schools, colleges & universities;</li>
<li>Have conducted value-based teacher training programs;</li>
<li>In the last couple of years, have reached out to thousands of people all across the globe through insightful quotes, seminars, and courses.</li>
                        </Box>

                        <Typography 
                          variant="body1" 
                          className="text-justify leading-[1.9] text-xs md:text-sm text-[#333] font-extralight mt-6 mb-4"
                        >
                          My sutra for teaching is:
                        </Typography>

                        <Box className="bg-[#f9f9f9] border border-[#F5A623] border-l-4 border-l-[#F5A623] p-4 md:p-6 mb-8 rounded">
                          <Typography 
                            variant="body1" 
                            className="italic font-extralight leading-[1.8] text-xs md:text-sm text-[#F5A623]"
                          >
                            "It should be simple, interesting, insightful, inspiring and most importantly authentic."
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {/* Tab Panel 2 - Contact */}
                    {tabValue === 2 && (
                      <Box className="py-6">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box className="flex items-center gap-4 mb-6">
                              <Phone className="text-[#F5A623] text-[30px]" />
                              <Typography className="text-xs md:text-sm font-extralight">
                                +91 9987318251
                              </Typography>
                            </Box>
                            
                            <Box className="flex items-center gap-4 mb-6">
                              <Email className="text-[#F5A623] text-[30px]" />
                              <Typography className="text-xs md:text-sm font-extralight">
                                mvdas@simplevedas.com
                              </Typography>
                            </Box>
                            
                            <Box className="flex items-start gap-4 mb-6">
                              <Schedule className="text-[#F5A623] text-[30px]" />
                              <Box>
                                <Typography className="text-xs md:text-sm font-extralight">
                                  Mon – Fri: 10 am to 7 pm
                                </Typography>
                                <Typography className="text-xs md:text-sm font-extralight">
                                  Sat – Sun: 10 am to 3 pm
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Typography 
                              variant="h6" 
                              className="font-extralight mb-4 text-sm md:text-base"
                            >
                              Follow Me
                            </Typography>
                            
                            <Box className="flex gap-4">
                              <Box
                                component="a"
                                href="https://www.youtube.com/channel/UC0K7NJqAQZ7XE3E-fl9DGlQ/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">Y</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.facebook.com/madhusudana.visnu.das/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">F</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.instagram.com/madhusudanavisnudas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">I</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Stats Section */}
                <Box className="mt-16 mb-12">
                  <Grid container spacing={{ xs: 3, md: 5 }}>
                    {/* Batches Taught */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <School className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            45+
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Batches Taught
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Happy Students */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <People className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            12966+
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Happy Students
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Talks & Lectures */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <EmojiEvents className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            882+
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Talks & Lectures
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Hours of Content */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <MenuBook className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            650+
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Hours of Content
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </>
          )
      default:
        return null;
    }
  };
    
  return (
    <Box>
      {getContent()}
      <NewsLetter />
    </Box>
  );
}