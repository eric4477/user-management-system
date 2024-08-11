import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
function Home() {
  const { logedInUser } = useContext(StoreContext);
  return (
    <div className="home-page px-6 bg-[#fcfbfb]">
      <header className="py-3 flex items-center border-b-[1px] border-[#E5E5E5]">
        <h2 className="text-3xl font-bold max-[600px]:text-2xl">
          Welcome back{" "}
          <span className="text-blue-600">
            {logedInUser?.firstName} {logedInUser?.lastName}
          </span>
        </h2>
      </header>
      <article className="mt-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dignissim, nisi ut fermentum egestas, nisi orci molestie libero, a
          sodales nisl tortor ac nisi. In euismod felis eu lacus vehicula, non
          cursus libero hendrerit. Maecenas luctus odio eu magna elementum, at
          malesuada odio tempor. Suspendisse potenti. Sed a nisi vitae libero
          varius varius. Aenean eu ligula in nisi fringilla finibus a eget enim.
          Integer euismod justo vel ligula vestibulum, vitae interdum nunc
          vehicula. Cras bibendum turpis ut leo cursus, vel fermentum erat
          vehicula.
        </p>
        <p className="mt-4">
          Sed in ante vitae felis sollicitudin malesuada. Mauris vitae libero
          sed mi sollicitudin elementum. Vestibulum consectetur libero at erat
          ullamcorper, vel vulputate augue posuere. Fusce laoreet urna in turpis
          ullamcorper, nec convallis magna condimentum. Donec vitae ex lacus.
          Vivamus tempor suscipit lectus in cursus. Quisque faucibus turpis
          lectus, id ullamcorper eros sodales nec. Nam varius erat ac risus
          vulputate, id interdum tortor dignissim. Praesent vitae elit a nunc
          sodales eleifend. Nam malesuada congue leo, ut lacinia enim suscipit
          eget. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <p className="mt-4">
          Cras cursus urna ut arcu lacinia, in vestibulum odio congue. Vivamus
          ullamcorper ante eget orci scelerisque, ac gravida metus blandit.
          Suspendisse convallis felis et sem viverra lobortis. Aliquam volutpat
          massa ac suscipit finibus. In non mi dapibus, elementum nulla eu,
          maximus orci. Curabitur vitae libero id augue ultricies pharetra. Cras
          id bibendum metus, eget gravida tortor. Nam facilisis nisl eget felis
          dictum vehicula. Morbi vel nisl eget metus tincidunt fringilla. Fusce
          bibendum malesuada orci. Proin vel orci dictum, malesuada justo quis,
          condimentum ligula. Sed bibendum tincidunt felis, ut malesuada odio
          malesuada non. Quisque venenatis quam eu interdum vehicula.
        </p>
      </article>
    </div>
  );
}
export default Home;
