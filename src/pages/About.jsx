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

// Common Styles
const commonStyles = {
  // Container Styles
  mainContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: 2, md: 4 },
  },

  contentBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "flex-start",
    gap: { xs: 2, md: 2.5 },
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: 2, md: 3 },
    border: "1px solid #ddd",
    borderRadius: 2,
    mt: 3,
  },

  // Typography Styles
  bodyText: {
    textAlign: "justify", 
    lineHeight: 1.9,
    fontSize: { xs: "0.85rem", md: "0.9rem" },
    color: "#333",
    fontWeight: 200,
  },

  sectionHeading: {
    fontWeight: 200,
    mb: 2,
    fontSize: { xs: "1rem", md: "1.2rem" },
    color: "#F5A623",
    borderBottom: "2px solid #F5A623",
    display: "inline-block",
    pb: 0.5
  },

  mainTitle: {
    fontWeight: 200,
    textAlign: "center",
    fontSize: { xs: "1.5rem", md: "1.8rem" },
    color: "#1a1a1a"
  },

  // Stats Card Styles
  statsCard: {
    textAlign: "center",
    padding: { xs: 3, md: 4 },
    height: { xs: "280px", md: "300px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px dotted #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#F5A623",
      boxShadow: "0 4px 12px rgba(245, 166, 35, 0.2)"
    },
    "&:hover .underline": {
      backgroundColor: "#F5A623"
    },
    "&:hover .circle-border": {
      opacity: 1
    }
  },

  statsIconContainer: {
    height: { xs: "70px", md: "80px" }, 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    position: "relative"
  },

  statsCircleBorder: {
    position: "absolute",
    width: { xs: "90px", md: "100px" },
    height: { xs: "90px", md: "100px" },
    borderRadius: "50%",
    border: "3px solid #F5A623",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none"
  },

  statsIcon: {
    fontSize: { xs: 60, md: 70 }, 
    color: "#F5A623",
    zIndex: 1,
    position: "relative"
  },

  statsContentBox: {
    flex: 1, 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 0
  },

  statsNumber: {
    fontWeight: 200, 
    color: "#F5A623",
    fontSize: { xs: "2rem", md: "2.5rem" },
    lineHeight: 1,
    mb: 1.5
  },

  statsUnderline: {
    width: "50px",
    height: "3px",
    backgroundColor: "#1a1a1a",
    mb: 1.5,
    borderRadius: "2px",
    transition: "background-color 0.3s ease"
  },

  statsLabel: {
    fontWeight: 200, 
    fontSize: { xs: "0.9rem", md: "1rem" },
    color: "#1a1a1a",
    lineHeight: 1.2
  },

  // Quote Box Style
  quoteBox: {
    backgroundColor: "#f9f9f9",
    borderLeft: "4px solid #F5A623",
    padding: { xs: 2, md: 3 },
    mb: 4,
    borderRadius: "4px"
  },

  // Image Styles
  imageContainer: {
    flex: { xs: "1", md: "0 0 40%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
    alignSelf: "flex-start",
  },

  responsiveImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }
};

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
          <Box sx={{ ...commonStyles.contentBox, overflow: "hidden", border: "3px solid #2196f3" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
                gap: { xs: 2, md: 2.5 },
                width: "100%",
                border: "2px solid #9c27b0",
                padding: 2,
              }}
            >
              {/* Left side - Text Box */}
              <Box
                sx={{
                  flex: { xs: "1", md: "0 0 55%" },
                  padding: { xs: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "2px solid #4caf50",
                }}
              >
                <Typography 
                  component="div"
                  sx={{ 
                    ...commonStyles.bodyText,
                    "& p": {
                      marginTop: 0,
                      marginBottom: 1,
                    },
                    "& p:first-of-type": {
                      marginTop: 0,
                    },
                    "& strong": {
                      fontWeight: 600,
                    }
                  }}
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
              <Box
                sx={{
                  flex: { xs: "1", md: "0 0 40%" },
                  padding: { xs: 2, md: 3 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                  overflow: "hidden",
                  border: "2px solid #ff9800",
                }}
              >
                <Box
                  component="img"
                  src={simpleVedasImg}
                  alt="Simple Vedas"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                    maxWidth: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Success Stats Section */}
          <Box sx={{ mt: 8, mb: 6, textAlign: "center" }}>
            <Typography variant="h3" sx={commonStyles.mainTitle}>
              Our Success Ratio
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#b71c1c", 
                mb: 6,
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                maxWidth: "900px",
                margin: "0 auto 48px auto",
                fontWeight: 200,
              }}
            >
              We measure our success through the satisfaction of our students. When they refer someone, we feel elated!
            </Typography>

            <Box sx={{ ...commonStyles.mainContainer }}>
              <Grid container spacing={{ xs: 3, md: 5 }} sx={{ justifyContent: "space-between" }}>
                {/* Happy Students */}
                <Grid item xs={12} sm={4}>
                  <Box sx={commonStyles.statsCard}>
                    <Box sx={commonStyles.statsIconContainer}>
                      <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                      <People sx={commonStyles.statsIcon} />
                    </Box>
                    <Box sx={commonStyles.statsContentBox}>
                      <Typography variant="h3" sx={commonStyles.statsNumber}>
                        12966+
                      </Typography>
                      <Box className="underline" sx={commonStyles.statsUnderline} />
                      <Typography variant="h6" sx={commonStyles.statsLabel}>
                        Happy Students
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Classes Completed */}
                <Grid item xs={12} sm={4}>
                  <Box sx={commonStyles.statsCard}>
                    <Box sx={commonStyles.statsIconContainer}>
                      <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                      <EmojiEvents sx={commonStyles.statsIcon} />
                    </Box>
                    <Box sx={commonStyles.statsContentBox}>
                      <Typography variant="h3" sx={commonStyles.statsNumber}>
                        882+
                      </Typography>
                      <Box className="underline" sx={commonStyles.statsUnderline} />
                      <Typography variant="h6" sx={commonStyles.statsLabel}>
                        Classes Completed
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Courses Available */}
                <Grid item xs={12} sm={4}>
                  <Box sx={commonStyles.statsCard}>
                    <Box sx={commonStyles.statsIconContainer}>
                      <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                      <MenuBook sx={commonStyles.statsIcon} />
                    </Box>
                    <Box sx={commonStyles.statsContentBox}>
                      <Typography variant="h3" sx={commonStyles.statsNumber}>
                        20+
                      </Typography>
                      <Box className="underline" sx={commonStyles.statsUnderline} />
                      <Typography variant="h6" sx={commonStyles.statsLabel}>
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

            <Box sx={commonStyles.mainContainer}>
              {/* Main Content */}
              <Box sx={{ mb: 6 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    ...commonStyles.mainTitle,
                    mb: 1,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                  }}
                >
                  HIS DIVINE GRACE <Box component="span" sx={{ color: "#F5A623" }}>SRILA PRABHUPADA</Box>
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    textAlign: "center",
                    mb: 4,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "#666",
                    fontStyle: "italic"
                  }}
                >
                  Founder-acharya of International Society for Krishna Consciousness
                </Typography>

                {/* Image and Introduction */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 5,
                  }}
                >
                  {/* Text on Left */}
                  <Box sx={{ flex: { xs: "1", md: "0 0 55%" } }}>
                    <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 3 }}>
                      Srila Prabhupada – At various times people have called him a scholar, a philosopher, a cultural ambassador, a prolific author, a religious leader, a spiritual teacher, a social critic, and a holy man. In truth, he was all these things and more.
                    </Typography>

                    <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 4 }}>
                      He is regarded as the world's pre-eminent exponent of the teachings and practices of <em>Bhakti-yoga</em> and Vedic Knowledge, outside of its roots in India. We invite you to know a little more about him;
                    </Typography>

                    {/* A Lifetime of Preparation */}
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h5" sx={commonStyles.sectionHeading}>
                        A Lifetime of Preparation
                      </Typography>
                      
                      <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 2 }}>
                        Born as Abhay Charan De on September 1, 1896, in Calcutta, as a young man he joined Mahatma Gandhi's civil disobedience movement. In 1922, a meeting with the prominent scholar and spiritual leader, Srila Bhaktisiddhanta Sarasvati, proved to be most influential on young Abhay's future calling.
                      </Typography>

                      <Typography variant="body1" sx={commonStyles.bodyText}>
                        Srila Bhaktisiddhanta was a leader in the <em>Gaudiya Vaishnava</em> community, a monotheistic tradition within the broader Hindu culture. At their very first meeting, Srila Bhaktisiddhanta asked Abhay to bring the teachings of Lord Krishna to the English-speaking world. Deeply moved by his devotion and wisdom, Abhay became a disciple of Srila Bhaktisiddhanta in 1933, and resolved to carry out his mentor's request. Abhay, later known by the honorific A.C. Bhaktivedanta Swami Prabhupada, spent the next 32 years preparing for his journey west.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Image on Right */}
                  <Box
                    sx={{
                      flex: { xs: "1", md: "0 0 40%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <img
                      src={srilaPrabhupadaImg}
                      alt="Srila Prabhupada"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                    />
                  </Box>
                </Box>

                {/* A Historic Voyage */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={commonStyles.sectionHeading}>
                    A Historic Voyage
                  </Typography>
                  
                  <Typography variant="body1" sx={commonStyles.bodyText}>
                    In 1965, at the age of 69, Srila Prabhupada travelled to New York City aboard a cargo ship. The journey was treacherous, and the elderly spiritual teacher suffered 2 heart attacks aboard ship. Arriving in the United States with just 7 dollars in Indian rupees and his translations of sacred Sanskrit texts, he began to spread the teachings of Krishna consciousness. His spiritual message resonated with many young people, some of whom came forward to become serious students of the Krishna tradition. With the help of these students, Srila Prabhupada rented a small storefront on New York's Lower East Side to use as a temple.
                  </Typography>
                </Box>

                {/* A World Acharya */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={commonStyles.sectionHeading}>
                    A World Acharya
                  </Typography>
                  
                  <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 2 }}>
                    In July of 1966, Bhaktivedanta Swami established the International Society for Krishna Consciousness (ISKCON) for the purpose he stated of <em>"checking the imbalance of values in the world and working for real unity and peace".</em>
                  </Typography>

                  <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 2 }}>
                    In the eleven years that followed, Srila Prabhupada circled the globe 14 times on lecture tours spreading the teachings of Lord Krishna. Men and women from all backgrounds and walks of life came forward to accept his message. With their help, Srila Prabhupada established temples, farm communities, a publishing house, and educational institutions around the world. And, he began what has now become the world's largest vegetarian food relief program, Hare Krishna Food for Life.
                  </Typography>

                  <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 2 }}>
                    With the desire to nourish the roots of Krishna consciousness in its home, Srila Prabhupada returned to India several times, where he sparked a revival in the <em>Vaishnava</em> tradition. In India, he opened dozens of temples, including large centres in the holy towns of Vrindavan and Mayapura.
                  </Typography>

                  <Typography variant="body1" sx={commonStyles.bodyText}>
                    Srila Prabhupada's most significant contributions, perhaps, are his books. He authored over 70 volumes on the Krishna tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition, and clarity. Several of his works are used as textbooks in numerous university courses. His writings have been translated into 76 languages. His most prominent works include: <em>Bhagavad-gita As It Is</em>, the 30-volume <em>Srimad-bhagavatam</em>, and the 17-volume <em>Sri Caitanya-caritamrita</em>.
                  </Typography>
                </Box>

                {/* A Saint never dies */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={commonStyles.sectionHeading}>
                    A Saint never dies
                  </Typography>
                  
                  <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 2 }}>
                    Though Srila Prabhupada passed away on November 14, 1977, in the holy town of Vrindavan, surrounded by his loving disciples and followers, he is still alive in the form of his teachings, and also in the hearts of millions of people who follow him. While he was physically alive, he touched the hearts of many by his wisdom and saintly qualities, and he still continues to inspire us all through his teachings.
                  </Typography>

                  <Typography variant="body1" sx={commonStyles.bodyText}>
                    For millennia, the teachings of Bhakti had been concealed within Sanskrit and Indian vernacular languages, and the rich culture of Bhakti had been hidden behind the borders of India. However, today, millions around the globe express their gratitude to Srila Prabhupada for revealing the timeless wisdom of Bhakti to a world immersed in a hedonistic and distracted ethos.
                  </Typography>
                </Box>

                {/* Quote */}
                <Box sx={commonStyles.quoteBox}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      color: "#333",
                      mb: 2,
                      fontWeight: 200
                    }}
                  >
                    "He was a genuine holy person with enormous integrity and compassion, and he had a powerful impact on those who met him. He never claimed authority and respect for himself; what he said and did was always in the name of Krishna…"
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                    fontSize: { xs: "0.75rem", md: "0.8rem" },
                    color: "#666",
                    fontWeight: 200
                    }}
                  >
                    – Dr. Thomas J. Hopkins,<br />
                    Professor of Religious Studies (Emeritus), Franklin and Marshall College
                  </Typography>
                </Box>

                {/* Learn More Link */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    textAlign: "center",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                    color: "#333",
                    fontWeight: 200
                  }}
                >
                  More can be known about his life and activities at{" "}
                  <Box 
                    component="a" 
                    href="https://www.prabhupada.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: "#F5A623",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline"
                      }
                    }}
                  >
                    https://www.prabhupada.net/
                  </Box>
                </Typography>
              </Box>
            </Box>
          </>
        );
      
      case "our-inspiration":
        return (
          <>
            <PageHeader backgroundImage={abouth} title="Our Inspiration" />

            <Box sx={commonStyles.mainContainer}>
              {/* Gopal Krishna Goswami */}
              <Box sx={{ mb: 8, mt: 4 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 200,
                    textAlign: "center",
                    mb: 5,
                    fontSize: { xs: "1.4rem", md: "1.7rem" },
                    color: "#1a1a1a"
                  }}
                >
                  HIS HOLINESS <Box component="span" sx={{ color: "#F5A623" }}>GOPAL KRISHNA GOSWAMI</Box>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 5,
                  }}
                >
                  <Box sx={{ flex: { xs: "1", md: "0 0 65%" } }}>
                    <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 3 }}>
                      His Holiness Gopal Krishna Goswami Maharaj was a senior disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He played a leading role in spreading the divine message of Bhagavad-gita As It Is. He graduated from Delhi University, and studied Business Management at the University of Paris in Sorbonne and later obtained his Master's degree in Business Administration from the McGill University of Montreal, Canada.
                    </Typography>

                    <Typography variant="body1" sx={commonStyles.bodyText}>
                      Maharaja was ISKCON GBC (Governing Body Commissioner) of over thirty temples around the world and served as an initiating spiritual master, with thousands of disciples in Russia, America, Canada, Europe, Asia, Africa, Australia and New Zealand. Also, he was the Chairman and Trustee of the Bhaktivedanta Book Trust, the world's largest publisher and distributor of Vedic literature.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      flex: { xs: "1", md: "0 0 30%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/His-Holiness-Gopal-Krishna-Goswami-Maharaja-3.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Gopal Krishna Goswami"
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Divider */}
              <Box sx={{ borderBottom: "2px solid #ddd", mb: 8 }} />

              {/* Bhakti Tirtha Swami */}
              <Box sx={{ mb: 8 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 200,
                    textAlign: "center",
                    mb: 5,
                    fontSize: { xs: "1.4rem", md: "1.7rem" },
                    color: "#1a1a1a"
                  }}
                >
                  HIS HOLINESS <Box component="span" sx={{ color: "#F5A623" }}>BHAKTI TIRTHA SWAMI</Box>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 5,
                  }}
                >
                  <Box
                    sx={{
                      flex: { xs: "1", md: "0 0 30%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2023/02/BT-Swami.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Tirtha Swami"
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: { xs: "1", md: "0 0 65%" } }}>
                    <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 3 }}>
                      His Holiness Bhakti Tirtha Swami was born John E. Favors in a pious, God-fearing family. He graduated from Princeton University and was then a leader in Dr. Martin Luther King Jr's civil rights movement. He was a charismatic spiritual leader who was known for his eclectic and dynamic preaching strategies. Widely acknowledged as a global specialist in international relations and conflict resolution, he became a spiritual consultant to many high-ranking members of the United Nations, celebrities, chiefs and kings around the world.
                    </Typography>

                    <Typography variant="body1" sx={commonStyles.bodyText}>
                      He authored many books on leadership, practical spirituality, & his reflections on great holy scriptures. His passing away from this world was like his life, a deep expression of love and compassion, and a lesson for all of us. A lot more can be read about him in his official biography Black Lotus: The Spiritual Journey of an Urban Mystic.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Divider */}
              <Box sx={{ borderBottom: "2px solid #ddd", mb: 8 }} />

              {/* Bhakti Dhira Damodara Swami */}
              <Box sx={{ mb: 6 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 200,
                    textAlign: "center",
                    mb: 5,
                    fontSize: { xs: "1.4rem", md: "1.7rem" },
                    color: "#1a1a1a"
                  }}
                >
                  HIS HOLINESS <Box component="span" sx={{ color: "#F5A623" }}>BHAKTI DHIRA DAMODARA SWAMI</Box>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 5,
                  }}
                >
                  <Box sx={{ flex: { xs: "1", md: "0 0 65%" } }}>
                    <Typography variant="body1" sx={{ ...commonStyles.bodyText, mb: 3 }}>
                      His Holiness Bhakti Dhira Damodara Swami Maharaja, the first African <em>sannyasi</em> and <em>diksha-guru</em> in ISKCON, is a grand-disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He is known and appreciated for his humility, gravity and deep knowledge. He tours and preaches extensively in different countries in Africa, in Brazil, India, Mauritius, the Seychelles and the United States.
                    </Typography>

                    <Typography variant="body1" sx={commonStyles.bodyText}>
                      He also regularly teaches <em>Bhakti-śāstrī</em> and <em>Bhakti-vaibhava</em> courses at the Vrindavan Institute of Higher Education (VIHE) and the Mayapur Institute (MI) and facilitates numerous seminars on the practical aspects of Krishna consciousness philosophy, such as community-building, self-sufficiency, etc. Following the desire of his spiritual master, Maharaja is also developing vibrant Krishna conscious self-sustainable farm communities in Ghana and Nigeria, Africa.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      flex: { xs: "1", md: "0 0 30%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/Bhakti-Dhira-Damodara-Swami.jpeg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Dhira Damodara Swami"
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
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

              <Box sx={commonStyles.mainContainer}>
                {/* Main Title */}
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700,
                    textAlign: "center",
                    mt: 4,
                    mb: 1,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: "#1a1a1a"
                  }}
                >
                  MADHUSUDANA VISNU <Box component="span" sx={{ color: "#F5A623" }}>DAS</Box>
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    textAlign: "center",
                    mb: 4,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "#666",
                    fontStyle: "italic"
                  }}
                >
                  Bhakti-yogi, Monk, Teacher, Writer, and Spiritual Lifestyle Coach
                </Typography>

                {/* Content Layout */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 5,
                  }}
                >
                  {/* Image on Left */}
                  <Box
                    sx={{
                      flex: { xs: "1", md: "0 0 35%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      component="img"
                      src={madhusudanaVisnuDasImg}
                      alt="Madhusudana Visnu Das"
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                    />
                  </Box>

                  {/* Tabs on Right */}
                  <Box sx={{ flex: { xs: "1", md: "0 0 60%" } }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange}
                        sx={{
                          "& .MuiTab-root": {
                            fontSize: { xs: "0.75rem", md: "0.85rem" },
                            fontWeight: 200,
                            color: "#666",
                            "&.Mui-selected": {
                              color: "#F5A623"
                            }
                          },
                          "& .MuiTabs-indicator": {
                            backgroundColor: "#F5A623"
                          }
                        }}
                      >
                        <Tab label="About Me" />
                        <Tab label="Experience" />
                        <Tab label="Contact" />
                      </Tabs>
                    </Box>

                    {/* Tab Panel 0 - About Me */}
                    {tabValue === 0 && (
                      <Box sx={{ py: 3 }}>
                        <Box
                          component="ul"
                          sx={{
                            ...commonStyles.bodyText,
                            listStylePosition: "outside",
                            pl: 3,
                            "& li": {
                              mb: 1.5,
                              lineHeight: 1.8
                            },
                            "& em": {
                              fontStyle: "italic"
                            }
                          }}
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
                      <Box sx={{ py: 3 }}>
                        <Box
                          component="ul"
                          sx={{
                            ...commonStyles.bodyText,
                            listStylePosition: "outside",
                            pl: 3,
                            "& li": {
                              mb: 1.5,
                              lineHeight: 1.8
                            }
                          }}
                        >
<li>Have been teaching since age 16;</li>
                          <li>Given numerous seminars in schools, colleges & universities;</li>
<li>Have conducted value-based teacher training programs;</li>
<li>In the last couple of years, have reached out to thousands of people all across the globe through insightful quotes, seminars, and courses.</li>
                        </Box>

                        <Typography 
                          variant="body1" 
                          sx={{ 
                            ...commonStyles.bodyText,
                            mt: 3,
                            mb: 2
                          }}
                        >
                          My sutra for teaching is:
                        </Typography>

                        <Box sx={commonStyles.quoteBox}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontStyle: "italic",
                              fontWeight: 200,
                              lineHeight: 1.8,
                              fontSize: { xs: "0.8rem", md: "0.85rem" },
                              color: "#F5A623"
                            }}
                          >
                            "It should be simple, interesting, insightful, inspiring and most importantly authentic."
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {/* Tab Panel 2 - Contact */}
                    {tabValue === 2 && (
                      <Box sx={{ py: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                              <Phone sx={{ color: "#F5A623", fontSize: 30 }} />
                              <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" }, fontWeight: 200 }}>
                                +91 9987318251
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                              <Email sx={{ color: "#F5A623", fontSize: 30 }} />
                              <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" }, fontWeight: 200 }}>
                                mvdas@simplevedas.com
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
                              <Schedule sx={{ color: "#F5A623", fontSize: 30 }} />
                              <Box>
                                <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" }, fontWeight: 200 }}>
                                  Mon – Fri: 10 am to 7 pm
                                </Typography>
                                <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" }, fontWeight: 200 }}>
                                  Sat – Sun: 10 am to 3 pm
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: 200,
                                mb: 2,
                                fontSize: { xs: "0.9rem", md: "1rem" }
                              }}
                            >
                              Follow Me
                            </Typography>
                            
                            <Box sx={{ display: "flex", gap: 2 }}>
                              <Box
                                component="a"
                                href="https://www.youtube.com/channel/UC0K7NJqAQZ7XE3E-fl9DGlQ/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 40,
                                  height: 40,
                                  borderRadius: "50%",
                                  backgroundColor: "#F5A623",
                                  color: "#fff",
                                  textDecoration: "none",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    backgroundColor: "#e09515",
                                    transform: "scale(1.1)"
                                  }
                                }}
                              >
                                <Typography sx={{ fontSize: "1rem", fontWeight: 200 }}>Y</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.facebook.com/madhusudana.visnu.das/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 40,
                                  height: 40,
                                  borderRadius: "50%",
                                  backgroundColor: "#F5A623",
                                  color: "#fff",
                                  textDecoration: "none",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    backgroundColor: "#e09515",
                                    transform: "scale(1.1)"
                                  }
                                }}
                              >
                                <Typography sx={{ fontSize: "1rem", fontWeight: 200 }}>F</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.instagram.com/madhusudanavisnudas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: 40,
                                  height: 40,
                                  borderRadius: "50%",
                                  backgroundColor: "#F5A623",
                                  color: "#fff",
                                  textDecoration: "none",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    backgroundColor: "#e09515",
                                    transform: "scale(1.1)"
                                  }
                                }}
                              >
                                <Typography sx={{ fontSize: "1rem", fontWeight: 200 }}>I</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Stats Section */}
                <Box sx={{ mt: 8, mb: 6 }}>
                  <Grid container spacing={{ xs: 3, md: 5 }}>
                    {/* Batches Taught */}
                    <Grid item xs={6} sm={3}>
                      <Box sx={commonStyles.statsCard}>
                        <Box sx={commonStyles.statsIconContainer}>
                          <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                          <School sx={commonStyles.statsIcon} />
                        </Box>
                        <Box sx={commonStyles.statsContentBox}>
                          <Typography variant="h3" sx={commonStyles.statsNumber}>
                            45+
                          </Typography>
                          <Box className="underline" sx={commonStyles.statsUnderline} />
                          <Typography variant="h6" sx={commonStyles.statsLabel}>
                            Batches Taught
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Happy Students */}
                    <Grid item xs={6} sm={3}>
                      <Box sx={commonStyles.statsCard}>
                        <Box sx={commonStyles.statsIconContainer}>
                          <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                          <People sx={commonStyles.statsIcon} />
                        </Box>
                        <Box sx={commonStyles.statsContentBox}>
                          <Typography variant="h3" sx={commonStyles.statsNumber}>
                            12966+
                          </Typography>
                          <Box className="underline" sx={commonStyles.statsUnderline} />
                          <Typography variant="h6" sx={commonStyles.statsLabel}>
                            Happy Students
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Talks & Lectures */}
                    <Grid item xs={6} sm={3}>
                      <Box sx={commonStyles.statsCard}>
                        <Box sx={commonStyles.statsIconContainer}>
                          <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                          <EmojiEvents sx={commonStyles.statsIcon} />
                        </Box>
                        <Box sx={commonStyles.statsContentBox}>
                          <Typography variant="h3" sx={commonStyles.statsNumber}>
                            882+
                          </Typography>
                          <Box className="underline" sx={commonStyles.statsUnderline} />
                          <Typography variant="h6" sx={commonStyles.statsLabel}>
                            Talks & Lectures
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Hours of Content */}
                    <Grid item xs={6} sm={3}>
                      <Box sx={commonStyles.statsCard}>
                        <Box sx={commonStyles.statsIconContainer}>
                          <Box className="circle-border" sx={commonStyles.statsCircleBorder} />
                          <MenuBook sx={commonStyles.statsIcon} />
                        </Box>
                        <Box sx={commonStyles.statsContentBox}>
                          <Typography variant="h3" sx={commonStyles.statsNumber}>
                            650+
                          </Typography>
                          <Box className="underline" sx={commonStyles.statsUnderline} />
                          <Typography variant="h6" sx={commonStyles.statsLabel}>
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