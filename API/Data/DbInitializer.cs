using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
  public static class DbInitializer
  {
    public static void Initialize(StoreContext context)
    {
      // If there are products already in the db, do nothing
      if (context.Products.Any()) return;

      var products = new List<Product>
            {
                new Product
                {
                    Name = "React Infinity Run Flyknit 3",
                    Description =
                        "Still our most tested shoe, made to help you stay after those lofty running goals. The Nike React Infinity Run 3 feels soft and stable, providing a smooth ride that will carry you through routes—both long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning around the heel and ankle for a supportive sensation. Keep running, we've got you.",
                    Price = 19000,
                    PictureUrl = "/images/products/nike-flyknit-3.png",
                    Brand = "Nike",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Air Presto",
                    Description = "With a sleek design that's more comfortable than your favourite T-shirt, the Nike Air Presto is made to feel good and look fast. Its stretchy sleeve creates a cosy, sock-like fit while the super-soft foam adds spring to your step.Put them on and you'll never want to take them off.",
                    Price = 17000,
                    PictureUrl = "/images/products/nike-air-presto.png",
                    Brand = "Nike",
                    Type = "Shoes",
                    QuantityInStock = 100
                },new Product
                {
                    Name = "Men's Charged Medal",
                    Description =
                        "These spikeless golf shoes aren't just comfortable—they also have a hybrid outsole gives you extra traction and grip you need for extra stability during your swing.",
                    Price = 11000,
                    PictureUrl = "/images/products/ua-charged-medal.png",
                    Brand = "Under Armour",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Air Zoom Vapor Cage 4 Rafa",
                    Description = "The NikeCourt Air Zoom Vapor Cage 4 Rafa is innovated to withstand your toughest clay court matches—thanks to an updated design that puts flexible, durable materials exactly where they're needed the most. Signature Rafael Nadal details let you rep your favourite player while you run the court.",
                    Price = 19000,
                    PictureUrl = "/images/products/nike-air-rafa.png",
                    Brand = "Nike",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "LeBron 19",
                    Description = "LeBron thrives when stakes are high and the pressure's on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Cushioned pods around the collar and tongue add comfort while reducing weight, giving players the secure feel and confidence to go all out when the game is on the line.",
                    Price = 26000,
                    PictureUrl = "/images/products/nike-lebron19.png",
                    Brand = "Nike",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "HOVR™ Phantom 2 Running",
                    Description = "We took your favorite UA HOVR™ Phantom 2 running shoes and wrapped them in light, breathable UA IntelliKnit. They're quick-drying, stretchy, and mapped to move with your feet, so you stay comfortable with every stride.",
                    Price = 18000,
                    PictureUrl = "/images/products/ua-phantom2.png",
                    Brand = "Under Armour",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Jordan 1 Retro",
                    Description = "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details.",
                    Price = 22500,
                    PictureUrl = "/images/products/nike-air-jordan.png",
                    Brand = "Nike",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Men's Fleece Hood",
                    Description =
                        "Keep it casual, but keep it true in the Nike Sportswear Hoodie.The sleeves are lined with a repeating Swoosh and Nike logo to show where your brand loyalty stands.It's made from a brushed fleece on the inside for a super-soft feel that lasts.",
                    Price = 8400,
                    PictureUrl = "/images/products/nike-fleece-pullover.png",
                    Brand = "Nike",
                    Type = "Tops",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Men's Armour Sleeveless",
                    Description =
                        "HeatGear® Armour is our original performance baselayer—the one you put on first and take off last. So we made it extra comfortable by wicking sweat and stretching so you can move no matter what.",
                    Price = 3000,
                    PictureUrl = "/images/products/ua-armour-sleeveless.png",
                    Brand = "Under Armour",
                    Type = "Tops",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "TW Knit Golf Jumper",
                    Description = "Cosy up in the TW Jumper. Crafted from a premium merino wool blend, it's designed to keep you warm and comfortable when the chill sets in. Thoughtful details, like the stretchy mesh stripe down the spine, let you move freely, on and off the course.",
                    Price = 15800,
                    PictureUrl = "/images/products/nike-knit-jumper.png",
                    Brand = "Nike",
                    Type = "Tops",
                    QuantityInStock = 100
                },

                new Product
                {
                    Name = "Rival Fleece Hood",
                    Description = "This is your new favorite men's casual hoodie for pretty much everything you do—it's light, comfy, and super-soft on the inside.",
                    Price = 6500,
                    PictureUrl = "/images/products/ua-rival-fleece.png",
                    Brand = "Under Armour",
                    Type = "Tops",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Waffle Hood",
                    Description = "Built with waffle knit fabric that is surprisingly lightweight for how incredibly warm and comfortable it feels.",
                    Price = 5499,
                    PictureUrl = "/images/products/ua-waffle-hoodie.png",
                    Brand = "Under Armour",
                    Type = "Tops",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Sportsmask Featherweight",
                    Description = "We listened to you, and our 2nd Gen UA SPORTSMASK takes everything that athletes loved about the original, but we made it 40% lighter, sleeker, and more comfortable, especially for more intense training and the heat.",
                    Price = 3500,
                    PictureUrl = "/images/products/ua-sportsmask-featherweight.png",
                    Brand = "Under Armour",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Sportsmask OG",
                    Description = "When health officials said healthy people should wear facemasks, we started building prototypes until we made the perfect one for athletes. It's got the airflow you need, a cool feel, and the best fit for running or training.",
                    Price = 3000,
                    PictureUrl = "/images/products/ua-sportsmask.png",
                    Brand = "Under Armour",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Iso-Chill Gaiter",
                    Description = "We flattened out the fibers and added some science to create a game-changing fabric that quickly pulls heat away from the skin-keeping you calm, cool, and crushing at max capacity.",
                    Price = 3000,
                    PictureUrl = "/images/products/ua-gaiter.png",
                    Brand = "Under Armour",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Essentials Backpack",
                    Description = "With its large laptop sleeve, phone holder and roomy main compartment, this backpack is made to take you places. Tonal trim highlights the construction, while its water-repellent details help secure your stuff even when the weather turns. This product is made from at least 50% recycled polyester fibres.",
                    Price = 9500,
                    PictureUrl = "/images/products/nike-essential-backpack.png",
                    Brand = "Nike",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Heritage86 Hat",
                    Description = "The Nike Sportswear Heritage86 Hat has a durable 6-panel design with an adjustable strap for the perfect fit. The iconic \"JUST DO IT.\" adds a classic look you can wear anywhere.",
                    Price = 3000,
                    PictureUrl = "/images/products/nike-heritage86-hat.png",
                    Brand = "Nike",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Mercurial Football",
                    Description = "Crafted with speed in mind, the Nike Mercurial Fade Football is ready to fly into the back of the net. A machine-stitched casing adds durability for long-lasting play.",
                    Price = 2500,
                    PictureUrl = "/images/products/nike-mercurial-fade.png",
                    Brand = "Nike",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Academy Team Duffel",
                    Description = "The Nike Academy Team Duffel Bag is a durable design built to keep you organised. Designated compartments provide space for your ball, boots and clothes—while multiple straps let you comfortably carry your gear when you're on the go.",
                    Price = 6500,
                    PictureUrl = "/images/products/nike-duffel-bag.png",
                    Brand = "Nike",
                    Type = "Accessories",
                    QuantityInStock = 100
                },
            };

      foreach (var product in products)
      {
        context.Products.Add(product);
      }

      context.SaveChanges();
    }
  }
}