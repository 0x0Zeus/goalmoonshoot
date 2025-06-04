import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8">
        <div className="mx-auto max-w-[850px] space-y-4 pb-4 pt-[100px] sm:space-y-5 sm:pb-6 sm:pt-[120px] md:pb-20 md:pt-[150px]">
          <p className="text-base sm:text-lg md:text-lg">
            Welcome to Live Like Kong – where legends are minted, memes reign
            supreme, and the jungle runs on crypto.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            At Live Like Kong, we’re not just building a meme coin — we’re
            unleashing a movement. Rooted in the unstoppable energy of the
            internet, our mission is to bring bold, ape-powered culture into
            Web3 through a powerful blend of digital art, NFTs, music, and
            merchandise — all crowned by the $KONG meme coin.
          </p>
          <h1 className="pt-4 text-xl font-bold sm:pt-5 sm:text-2xl">
            What We Stand For
          </h1>
          <p className="text-base sm:text-lg md:text-lg">
            Live like Kong means going big.
            <br />
            <br />
            It’s about owning the moment, stacking bananas, and swinging through
            market volatility like a boss.
            <br />
            <br /> It’s about meme culture without limits.
            <br />
            <br /> It’s about being loud, proud, and fully decentralized.
          </p>

          <h1 className="pt-4 text-xl font-bold sm:pt-5 sm:text-2xl">
            The $KONG Strategy: Meme Coin Hype Done Right
          </h1>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🦍 Community First: </b>Every legend starts with a tribe. Our
            meme coin is powered by the people — viral content, meme warfare,
            and grassroots campaigns lead the charge.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🚀 Momentum & Mayhem: </b>We thrive on FOMO and fire. Hype
            campaigns, influencer drops, and surprise collabs keep $KONG
            swinging through timelines and into charts.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🎯 Cross-Media Fusion: </b>Our ecosystem drives attention across
            every touchpoint — from NFT galleries to Spotify playlists to TikTok
            memes. When we roar, everyone hears it.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Our Expanding Jungle:
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🎨 Digital Art & NFTs: </b>Custom collections like Kong and
            GlacierKong bring iconic energy to your wallet. Unique, hand-crafted
            drops built for flex, fuel, and fandom.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🎶 Music & Soundtracks: </b>We’re releasing banger-level meme
            anthems like “Crown on the Chain,” “Kong to the Moon,” and “Live
            Like Kong” — because a king needs a soundtrack.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>🧢 Merchandise: </b>Rep the jungle in style. From crypto-fit
            hoodies to gold chain drip and meme tees, our merch makes your
            wardrobe Web3-ready.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>👑 Cultural IP Expansion: </b>We’re building a Kongverse —
            comics, digital avatars, memes, collectibles, and beyond. Expect
            surprises, storylines, and seasonal drops.
          </p>
          <h1 className="pt-4 text-xl font-bold sm:pt-5 sm:text-2xl">
            Why Live Like Kong?
          </h1>
          <p className="text-base sm:text-lg md:text-lg">
            Because living like a king is good — but living like Kong is
            legendary.
          </p>
          <p className="text-base font-bold italic sm:text-lg md:text-lg">
            Join the movement.
            <br />
            Own the meme.
            <br />
            Rule the chain.
          </p>

          <h1 className="pt-4 text-xl font-bold sm:pt-5 sm:text-2xl pb-5">
            Follow Us
          </h1>
          <Link to="https://twitter.com/LiveLikeKong">
            <p className="text-base sm:text-lg md:text-lg">
              Twitter / X: @LiveLikeKong
            </p>
          </Link>
          <p className="text-base sm:text-lg md:text-lg ">
            Solana CA: <b><i>BS4oD5UnGUHeH1n8RyjG4eCMXLD8piHTZHhyq4E7KYpb</i></b>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
