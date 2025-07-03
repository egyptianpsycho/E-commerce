import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import { addToCart, removeFromCart } from "../../Store/cartSlice";
import { SESSIONS } from "../../CONSTANTS";
import Button from "../UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  MessageCircle,
  Play,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CardContent, DetailCard } from "./DetailCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import Header from "../Header";
gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const session = SESSIONS.find((s) => s.id === id);
  const [activeTab, setActiveTab] = useState("overview");
  const getDiscountPercentage = (originalPrice: number, price: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };
  const DiscountPercentage: number =
    session?.originalPrice && session?.price
      ? getDiscountPercentage(session.originalPrice, session.price)
      : 0;
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    if (!session) return;
    if (isInCart) {
      dispatch(removeFromCart(session.id));
    } else {
      dispatch(
        addToCart({
          title: session.title,
          id: session.id,
          price: session.price,
          originalPrice: session.originalPrice,
          mentor: session.mentor,
          image: session.image,
        })
      );
    }
  };

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(heroRef.current?.children || []),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        sidebarRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [session]);

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Session Not Found
          </h1>
          <Button to="/sessions">
            <Button className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent">
              Back to Sessions
            </Button>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header page="DetailsPage" />
      <section ref={heroRef} className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div ref={contentRef} className="lg:col-span-2">
              {/* Course Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`${
                      session.level === "Beginner"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : session.level === "Intermediate"
                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    } inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border`}
                  >
                    {session.level}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">
                      {session.rating}
                    </span>
                    <span className="text-gray-400">
                      ({session.reviews.length} reviews)
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {session.title}
                </h1>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {session.description}
                </p>

                {/* Course Stats */}
                <div className="flex flex-wrap gap-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{session.mentor.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span>{session.language}</span>
                  </div>
                  {session.certificate && (
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span>Certificate</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Course Image/Video */}
              <div
                className={`relative h-64 md:h-80 bg-gradient-to-r  rounded-2xl overflow-hidden mb-8 group`}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 text-white/50" />
                <img
                  src={session.image}
                  alt={session.title}
                  className="object-cover w-full h-full "
                />
              </div>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-purple-600 duration-500 cursor-pointer "
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="curriculum"
                    className="data-[state=active]:bg-purple-600 duration-500 cursor-pointer"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger
                    value="mentor"
                    className="data-[state=active]:bg-purple-600 duration-500 cursor-pointer"
                  >
                    Mentor
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-purple-600 duration-500 cursor-pointer"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <DetailCard className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        About This Course
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {session.fullDescription}
                      </p>

                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-purple-400" />
                        What You'll Learn
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {session.whatYouLearn.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {session.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="text-gray-300 flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </DetailCard>
                </TabsContent>

                <TabsContent value="curriculum" className="mt-6">
                  <DetailCard className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Course Curriculum
                      </h3>
                      <div className="space-y-4">
                        {session.curriculum.map((section, index) => (
                          <div
                            key={index}
                            className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-lg font-semibold text-white">
                                {section.title}
                              </h4>
                              <span className="text-sm text-gray-400">
                                {section.duration}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {section.topics.map((topic, topicIndex) => (
                                <li
                                  key={topicIndex}
                                  className="text-gray-300 flex items-center space-x-3"
                                >
                                  <Play className="w-4 h-4 text-purple-400" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </DetailCard>
                </TabsContent>

                <TabsContent value="mentor" className="mt-6 ">
                  <DetailCard className="bg-white/5 backdrop-blur-sm border-white/10 ">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <Avatar className="w-20 h-20">
                          <AvatarImage
                            loading="lazy"
                            src={session.mentor.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {session.mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 max-sm:w-44">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {session.mentor.name}
                          </h3>
                          <p className="text-purple-300 mb-2">
                            {session.mentor.title}
                          </p>
                          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300 max-sm:flex-col max-sm:gap-2 ">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{session.mentor.rating} rating</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{session.mentor.students} students</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>
                                {session.mentor.experience} experience
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed max-sm:w-48">
                            {session.mentor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </DetailCard>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <DetailCard className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Student Reviews
                      </h3>
                      <div className="space-y-6">
                        {session.reviews.map((review) => (
                          <div
                            key={review.id}
                            className="border-b border-white/10 pb-6 last:border-b-0"
                          >
                            <div className="flex items-start space-x-4">
                              <Avatar>
                                <AvatarImage
                                  loading="lazy"
                                  src={review.avatar || "/placeholder.svg"}
                                />
                                <AvatarFallback>
                                  {review.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-white">
                                    {review.name}
                                  </h4>
                                  <span className="text-sm text-gray-400">
                                    {review.date}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1 mb-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-600"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                  {review.comment}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </DetailCard>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-6">
                <DetailCard className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Price Section */}
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-3xl font-bold text-white">
                          ${session.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${session.originalPrice}
                        </span>
                        <div className="bg-green-500/20 text-green-300 border-green-500/30 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border  ">
                          {DiscountPercentage}% OFF
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button
                          className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500  font-semibold py-2 px-4 h-10 rounded-lg items-center flex justify-self-center border-transparent w-full justify-center hover:scale-105"
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          {isInCart ? (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Added to Cart
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </>
                          )}
                        </Button>

                        <Button className="w-full inline-flex items-center justify-center  rounded-md  font-medium  border  h-10 px-4 py-2 relative border-white/20 text-white hover:bg-white/10 hover:text-black transition-all duration-500 bg-transparent cursor-pointer">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Session
                        </Button>
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="p-6">
                      <h4 className="font-semibold text-white mb-4">
                        This course includes:
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">
                            {session.duration} of content
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">
                            1-on-1 mentoring
                          </span>
                        </div>
                        {session.certificate && (
                          <div className="flex items-center space-x-3">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-300">
                              Certificate of completion
                            </span>
                          </div>
                        )}
                        {session.lifetime && (
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-300">
                              Lifetime access
                            </span>
                          </div>
                        )}
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">
                            Direct mentor support
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="p-6 border-t border-white/10">
                      <h4 className="font-semibold text-white mb-3">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {session.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="border-purple-500/30 text-purple-300 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </DetailCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
