import DefaultImg from "../images/news/news-default.png";
import Decor from "./Decor";
import NewsImg from "../images/news/news-img.png";
const NewsArticle = () => {
    return (
        <div className="max-w-[1240px] mx-auto flex flex-col gap-6">
            <div className="w-full h-[826px]">
                <img src={DefaultImg} className="w-full h-full object-cover" alt="" />
            </div>
            <h2 className="text-brand font-bold text-[40px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptatibus repellat dicta cumque modi
                corporis eligendi? Blanditiis repudiandae veniam, recusandae at minima eaque fuga sequi modi nemo,
                consequatur ipsam consequuntur.
            </h2>
            <Decor />

            <p className="text-[20px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sed reiciendis dolorum? Eligendi
                aspernatur, error id maxime ullam molestiae perspiciatis reiciendis, cum impedit neque, repellat
                corporis vel molestias corrupti modi? Ad delectus ea quas officiis tempora? Non illum ipsam tempore
                dolore impedit maiores harum, iure, aliquid quo similique aliquam quia eum consectetur. Necessitatibus
                vitae culpa dicta tenetur ducimus esse facilis?
            </p>

            <p className="text-[20px] font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore, quasi incidunt
                reprehenderit vitae veritatis maxime sed iure, ipsum asperiores commodi laboriosam aperiam aliquid, quis
                velit pariatur possimus repellat amet! Nostrum ab perspiciatis, natus at molestias repellendus
                consectetur dicta veritatis cupiditate odit omnis porro eaque tenetur quas totam ipsa nobis. Error
                quidem iure commodi beatae quia natus omnis, accusamus nam? In dolores et sapiente neque ducimus atque
                hic, vitae accusamus nemo minus assumenda illo, quam debitis vel architecto aliquid libero? Fugit
                nostrum error qui corporis tempora perspiciatis laudantium quod ipsam?
            </p>
            <h2 className="text-brand font-bold text-[40px] ">Lorem ipsum dolor sit amet, consectetur </h2>
            <Decor />

            <img src={NewsImg} className="w-[613px] h-[355px]" alt="" />

            <p className="text-[20px]  font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum totam earum consequatur rem mollitia
                inventore atque? Excepturi eveniet dignissimos sint, maiores nemo itaque magnam animi non odit vitae
                reiciendis qui. At eligendi sint, in alias dolore magni adipisci ab repudiandae, odio, culpa consectetur
                est ratione. Iste ratione laborum eligendi nulla recusandae ipsa, odit sunt, corporis explicabo ad
                obcaecati fugit mollitia! Repellat esse nemo dolorem sapiente enim! Nesciunt minus veniam illum facilis
                dolore, magni, error possimus mollitia impedit quo voluptatum quae dolorum alias dolores unde cupiditate
                id modi non earum ea! Voluptate, similique qui assumenda facilis, sint odio dignissimos consectetur illo
                ab tenetur deleniti nesciunt officia labore totam a? Nam consectetur, voluptatum consequuntur magnam
                quis soluta omnis odit veniam quasi perferendis.
            </p>

            <p className="text-[20px]  font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore, quasi incidunt
                reprehenderit vitae veritatis maxime sed iure, ipsum asperiores commodi laboriosam aperiam aliquid, quis
                velit pariatur possimus repellat amet! Nostrum ab perspiciatis, natus at molestias repellendus
                consectetur dicta veritatis cupiditate odit omnis porro eaque tenetur quas totam ipsa nobis. Error
                quidem iure commodi beatae quia natus omnis, accusamus nam? In dolores et sapiente neque ducimus atque
                hic, vitae accusamus nemo minus assumenda illo, quam debitis vel architecto aliquid libero? Fugit
                nostrum error qui corporis tempora perspiciatis laudantium quod ipsam?
            </p>
        </div>
    );
};

export default NewsArticle;
