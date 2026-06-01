import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePageFigma.css';

// Exact 1512-wide ReelSaga design from Figma (node 109:173), scaled to the viewport.
function HomePage() {
  const navigate = useNavigate();
  const go = (id) => navigate(`/player/${id}?episode=0`);
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const fit = () => {
      const root = rootRef.current, stage = stageRef.current;
      if (!root || !stage) return;
      const w = root.clientWidth;
      const s = Math.min(1, w / 1512);
      stage.style.transform = `scale(${s})`;
      stage.style.left = w > 1512 ? `${(w - 1512) / 2}px` : '0px';
      root.style.height = `${3625 * s}px`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div className="rs-fig" ref={rootRef}>
      <div className="rs-fig__stage" ref={stageRef}>
      <div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:262" data-name="coveri_back_image">
        <div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:264" data-name="coveri_back_image">
          <div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:266" data-name="Mask group">
            <div className="absolute contents left-[-215.59px] top-[-316.02px]" data-node-id="109:268">
              <div className="absolute contents left-[-215.59px] top-[-130.73px]" data-node-id="109:269" data-name="Mask group">
                <div className="absolute bg-gradient-to-b from-[rgba(3,22,42,0.76)] h-[864.613px] left-[calc(8.33%+41.59px)] mask-position-[-190.586px_10.57px,_-190.586px_10.57px,_-190.586px_10.57px] opacity-50 to-[91.08%] to-[rgba(5,37,72,0)] top-[99.43px] w-[397.683px]" data-node-id="109:270" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Foreground Color" />
                <div className="absolute contents h-[1306.76px] left-[-215.59px] top-[-130.73px] w-[1139.478px]" data-node-id="109:271">
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-215.59px] top-[111.73px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[192.586px_-1.727px,_192.586px_-1.727px,_192.586px_-1.727px] opacity-50 relative w-[108.921px]" data-node-id="109:272" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00110 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/81869bfb-17c7-4f85-9f8f-7b068f395c37.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+33.6px)] top-[456.4px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-308.598px_-346.399px,_-308.598px_-346.399px,_-308.598px_-346.399px] opacity-50 relative w-[108.921px]" data-node-id="109:273" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00113 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/512148f5-8856-4137-87ff-d64f170d3496.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+71.25px)] top-[565.12px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-598.25px_-455.118px,_-598.25px_-455.118px,_-598.25px_-455.118px] opacity-50 relative w-[108.921px]" data-node-id="109:274" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00119 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73d6e744-7624-4e7c-8f68-81f1a85107f6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+20.36px)] top-[77.32px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-169.359px_32.679px,_-169.359px_32.679px,_-169.359px_32.679px] opacity-50 relative w-[108.921px]" data-node-id="109:275" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00158 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b795dd1c-435a-4578-8a43-0af4df6d0c3d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[62.89px] top-[869.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-85.891px_-759.883px,_-85.891px_-759.883px,_-85.891px_-759.883px] opacity-50 relative w-[108.921px]" data-node-id="109:276" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00165 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0c76f7c2-3115-462c-a1c4-d26e446baf09.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%-11.61px)] top-[-3.5px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-389.395px_113.499px,_-389.395px_113.499px,_-389.395px_113.499px] opacity-50 relative w-[108.921px]" data-node-id="109:277" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00170 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63257a71-db15-46c8-922c-3e3891bc9153.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[74.07px] top-[220.45px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-97.07px_-110.446px,_-97.07px_-110.446px,_-97.07px_-110.446px] opacity-50 relative w-[108.921px]" data-node-id="109:278" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00222 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a3ee1a57-3847-44e0-9f79-541d43f52346.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-145.96px] top-[301.27px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[122.965px_-191.266px,_122.965px_-191.266px,_122.965px_-191.266px] opacity-50 relative w-[108.921px]" data-node-id="109:279" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00230 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9496fe97-3b39-4035-a53a-4d4e7c1f97b2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-4.05px] top-[347.68px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-18.945px_-237.68px,_-18.945px_-237.68px,_-18.945px_-237.68px] opacity-50 relative w-[108.921px]" data-node-id="109:280" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00311 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73666ac1-776e-4d56-90b5-6c11606f528e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+66.52px)] top-[-130.73px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-467.519px_240.734px,_-467.519px_240.734px,_-467.519px_240.734px] opacity-50 relative w-[108.921px]" data-node-id="109:281" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00316 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/058fa5ae-2e3d-4438-b455-22643f8bd07b.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+89.98px)] top-[266.86px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-238.977px_-156.86px,_-238.977px_-156.86px,_-238.977px_-156.86px] opacity-50 relative w-[108.921px]" data-node-id="109:282" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00330 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d841f431-b4f0-4675-ad51-ed4ebd99106c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+42.1px)] top-[139.63px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-317.102px_-29.626px,_-317.102px_-29.626px,_-317.102px_-29.626px] opacity-50 relative w-[108.921px]" data-node-id="109:283" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00332 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/720da060-5b81-40d1-bad3-66701115ef38.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+58.01px)] top-[186.04px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-459.012px_-76.04px,_-459.012px_-76.04px,_-459.012px_-76.04px] opacity-50 relative w-[108.921px]" data-node-id="109:284" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00412 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/06cfb961-9c95-4fa3-a621-917e20a9a8f2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-76.35px] top-[490.81px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[53.348px_-380.805px,_53.348px_-380.805px,_53.348px_-380.805px] opacity-50 relative w-[108.921px]" data-node-id="109:285" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI_00408_ 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0789826a-d865-4b29-bc5f-30818471faf5.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+1.63px)] top-[375.58px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-528.633px_-265.579px,_-528.633px_-265.579px,_-528.633px_-265.579px] opacity-50 relative w-[108.921px]" data-node-id="109:286" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00132 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ffba8fda-72a7-45e1-8581-dd12938c8837.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-6.73px] top-[680.34px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-16.273px_-570.344px,_-16.273px_-570.344px,_-16.273px_-570.344px] opacity-50 relative w-[108.921px]" data-node-id="109:287" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00345 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/bc9bddf7-e764-4797-b170-705bf6141e21.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[65.56px] top-[537.22px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-88.563px_-427.219px,_-88.563px_-427.219px,_-88.563px_-427.219px] opacity-50 relative w-[108.921px]" data-node-id="109:288" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/34a63c25-4387-41a3-8d83-7faaaba664c7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+17.69px)] top-[409.98px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-166.688px_-299.985px,_-166.688px_-299.985px,_-166.688px_-299.985px] opacity-50 relative w-[108.921px]" data-node-id="109:289" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a57e04f5-f55b-4fda-a18a-78774bcfbc2c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+10.14px)] top-[58.81px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-537.137px_51.195px,_-537.137px_51.195px,_-537.137px_51.195px] opacity-50 relative w-[108.921px]" data-node-id="109:290" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (3) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d6cc97eb-23a9-4b1a-84b1-9598c117c2cd.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%-1.04px)] top-[708.24px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-525.961px_-598.243px,_-525.961px_-598.243px,_-525.961px_-598.243px] opacity-50 relative w-[108.921px]" data-node-id="109:291" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (4) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c894a096-6f8a-410e-b4c6-091c9f35681a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+55.34px)] top-[518.7px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-456.34px_-408.704px,_-456.34px_-408.704px,_-456.34px_-408.704px] opacity-50 relative w-[108.921px]" data-node-id="109:292" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (5) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ee29b1eb-95fa-4ebc-a3d7-e0dab9c399d1.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+79.76px)] top-[248.34px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-606.758px_-138.344px,_-606.758px_-138.344px,_-606.758px_-138.344px] opacity-50 relative w-[108.921px]" data-node-id="109:293" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (6) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c3420684-2707-44bf-91df-9489fab32d67.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+98.48px)] top-[-49.91px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-247.485px_159.914px,_-247.485px_159.914px,_-247.485px_159.914px] opacity-50 relative w-[108.921px]" data-node-id="109:294" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (7) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/45556651-4746-4b16-b007-63c51abbca22.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+9.18px)] top-[726.76px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-158.18px_-616.758px,_-158.18px_-616.758px,_-158.18px_-616.758px] opacity-50 relative w-[108.921px]" data-node-id="109:295" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (8) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/cd8aa759-0561-4edd-a08c-86376b782b2a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+87.31px)] top-[599.52px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-236.309px_-489.524px,_-236.309px_-489.524px,_-236.309px_-489.524px] opacity-50 relative w-[108.921px]" data-node-id="109:296" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (9) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9b0fa5bf-75ed-4b85-a8c3-362098e2237e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+103.21px)] top-[645.94px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-378.215px_-535.938px,_-378.215px_-535.938px,_-378.215px_-535.938px] opacity-50 relative w-[108.921px]" data-node-id="109:297" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (10) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/29a638bf-8c24-403d-b5ee-852d133d87ed.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[4.45px] top-[30.91px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-27.449px_79.093px,_-27.449px_79.093px,_-27.449px_79.093px] opacity-50 relative w-[108.921px]" data-node-id="109:298" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (11) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d13dad2e-d5ef-4dbd-9186-765f0e0eb643.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+14.87px)] top-[754.66px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-667.871px_-644.657px,_-667.871px_-644.657px,_-667.871px_-644.657px] opacity-50 relative w-[108.921px]" data-node-id="109:299" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (12) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/47fee460-43eb-40cc-84d1-9a7ac057ff97.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+23.38px)] top-[437.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-676.375px_-327.883px,_-676.375px_-327.883px,_-676.375px_-327.883px] opacity-50 relative w-[108.921px]" data-node-id="109:300" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (13) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a80b85a9-fb27-431a-8a8f-d2689a32190d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-73.68px] top-[158.14px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[50.676px_-48.141px,_50.676px_-48.141px,_50.676px_-48.141px] opacity-50 relative w-[108.921px]" data-node-id="109:301" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (14) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/5ba2d1d8-2b10-4e15-ab68-232b7e6292f0.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+78.8px)] top-[916.3px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-227.801px_-806.297px,_-227.801px_-806.297px,_-227.801px_-806.297px] opacity-50 relative w-[108.921px]" data-node-id="109:302" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63d1ef5e-00f0-4638-84f0-35aafffdb0b6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+30.93px)] top-[789.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-305.926px_-679.063px,_-305.926px_-679.063px,_-305.926px_-679.063px] opacity-50 relative w-[108.921px]" data-node-id="109:303" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/6273ad2a-9d37-4043-b3ff-4b1c1b0bef46.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+46.84px)] top-[835.48px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-447.836px_-725.477px,_-447.836px_-725.477px,_-447.836px_-725.477px] opacity-50 relative w-[108.921px]" data-node-id="109:304" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c66d4a50-ed78-45ba-ab38-3fb3c513bfe7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%-14.28px)] top-[329.16px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-386.723px_-219.165px,_-386.723px_-219.165px,_-386.723px_-219.165px] opacity-50 relative w-[108.921px]" data-node-id="109:305" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/03bd8b3e-8641-438a-b20b-80c8b1ea8813.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+93px)] top-[627.42px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-745.996px_-517.422px,_-745.996px_-517.422px,_-745.996px_-517.422px] opacity-50 relative w-[108.921px]" data-node-id="109:306" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI 99">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a1e336d6-7666-42c1-9f97-d20420bbde29.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[calc(33.33%+85.05px)] top-[-316.02px]" data-node-id="109:307" data-name="Mask group">
                <div className="absolute bg-gradient-to-b from-[rgba(3,22,42,0.76)] h-[864.613px] left-[calc(58.33%+90.22px)] mask-position-[-995.223px_195.859px,_-995.223px_195.859px,_-995.223px_195.859px] opacity-50 to-[91.08%] to-[rgba(5,37,72,0)] top-[-85.86px] w-[397.683px]" data-node-id="109:308" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Foreground Color" />
                <div className="absolute contents h-[1306.76px] left-[calc(33.33%+85.05px)] top-[-316.02px] w-[1139.478px]" data-node-id="109:309">
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+85.05px)] top-[-73.56px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-612.051px_183.562px,_-612.051px_183.562px,_-612.051px_183.562px] opacity-50 relative w-[108.921px]" data-node-id="109:310" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00110 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/81869bfb-17c7-4f85-9f8f-7b068f395c37.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+82.23px)] top-[271.11px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1113.234px_-161.11px,_-1113.234px_-161.11px,_-1113.234px_-161.11px] opacity-50 relative w-[108.921px]" data-node-id="109:311" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00113 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/512148f5-8856-4137-87ff-d64f170d3496.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+119.89px)] top-[379.83px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1402.887px_-269.829px,_-1402.887px_-269.829px,_-1402.887px_-269.829px] opacity-50 relative w-[108.921px]" data-node-id="109:312" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00119 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73d6e744-7624-4e7c-8f68-81f1a85107f6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+69px)] top-[-107.97px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-973.996px_217.968px,_-973.996px_217.968px,_-973.996px_217.968px] opacity-50 relative w-[108.921px]" data-node-id="109:313" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00158 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b795dd1c-435a-4578-8a43-0af4df6d0c3d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+111.53px)] top-[684.59px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-890.527px_-574.594px,_-890.527px_-574.594px,_-890.527px_-574.594px] opacity-50 relative w-[108.921px]" data-node-id="109:314" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00165 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0c76f7c2-3115-462c-a1c4-d26e446baf09.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+37.03px)] top-[-188.79px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1194.031px_298.789px,_-1194.031px_298.789px,_-1194.031px_298.789px] opacity-50 relative w-[108.921px]" data-node-id="109:315" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00170 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63257a71-db15-46c8-922c-3e3891bc9153.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%-3.29px)] top-[35.16px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-901.707px_74.843px,_-901.707px_74.843px,_-901.707px_74.843px] opacity-50 relative w-[108.921px]" data-node-id="109:316" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00222 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a3ee1a57-3847-44e0-9f79-541d43f52346.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+28.67px)] top-[115.98px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-681.672px_-5.977px,_-681.672px_-5.977px,_-681.672px_-5.977px] opacity-50 relative w-[108.921px]" data-node-id="109:317" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00230 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9496fe97-3b39-4035-a53a-4d4e7c1f97b2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+44.58px)] top-[162.39px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-823.582px_-52.391px,_-823.582px_-52.391px,_-823.582px_-52.391px] opacity-50 relative w-[108.921px]" data-node-id="109:318" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00311 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73666ac1-776e-4d56-90b5-6c11606f528e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+115.16px)] top-[-316.02px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1272.156px_426.023px,_-1272.156px_426.023px,_-1272.156px_426.023px] opacity-50 relative w-[108.921px]" data-node-id="109:319" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00316 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/058fa5ae-2e3d-4438-b455-22643f8bd07b.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+12.61px)] top-[81.57px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1043.613px_28.429px,_-1043.613px_28.429px,_-1043.613px_28.429px] opacity-50 relative w-[108.921px]" data-node-id="109:320" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00330 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d841f431-b4f0-4675-ad51-ed4ebd99106c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+90.74px)] top-[-45.66px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1121.738px_155.664px,_-1121.738px_155.664px,_-1121.738px_155.664px] opacity-50 relative w-[108.921px]" data-node-id="109:321" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00332 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/720da060-5b81-40d1-bad3-66701115ef38.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+106.65px)] top-[0.75px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1263.648px_109.249px,_-1263.648px_109.249px,_-1263.648px_109.249px] opacity-50 relative w-[108.921px]" data-node-id="109:322" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00412 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/06cfb961-9c95-4fa3-a621-917e20a9a8f2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+98.29px)] top-[305.52px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-751.289px_-195.516px,_-751.289px_-195.516px,_-751.289px_-195.516px] opacity-50 relative w-[108.921px]" data-node-id="109:323" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI_00408_ 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0789826a-d865-4b29-bc5f-30818471faf5.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+50.27px)] top-[190.29px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1333.27px_-80.29px,_-1333.27px_-80.29px,_-1333.27px_-80.29px] opacity-50 relative w-[108.921px]" data-node-id="109:324" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00132 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ffba8fda-72a7-45e1-8581-dd12938c8837.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+41.91px)] top-[495.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-820.91px_-385.055px,_-820.91px_-385.055px,_-820.91px_-385.055px] opacity-50 relative w-[108.921px]" data-node-id="109:325" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00345 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/bc9bddf7-e764-4797-b170-705bf6141e21.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+114.2px)] top-[351.93px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-893.199px_-241.93px,_-893.199px_-241.93px,_-893.199px_-241.93px] opacity-50 relative w-[108.921px]" data-node-id="109:326" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/34a63c25-4387-41a3-8d83-7faaaba664c7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+66.32px)] top-[224.7px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-971.324px_-114.696px,_-971.324px_-114.696px,_-971.324px_-114.696px] opacity-50 relative w-[108.921px]" data-node-id="109:327" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a57e04f5-f55b-4fda-a18a-78774bcfbc2c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+58.77px)] top-[-126.48px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1341.773px_236.484px,_-1341.773px_236.484px,_-1341.773px_236.484px] opacity-50 relative w-[108.921px]" data-node-id="109:328" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (3) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d6cc97eb-23a9-4b1a-84b1-9598c117c2cd.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+47.6px)] top-[522.95px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1330.598px_-412.954px,_-1330.598px_-412.954px,_-1330.598px_-412.954px] opacity-50 relative w-[108.921px]" data-node-id="109:329" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (4) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c894a096-6f8a-410e-b4c6-091c9f35681a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+103.98px)] top-[333.41px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1260.977px_-223.415px,_-1260.977px_-223.415px,_-1260.977px_-223.415px] opacity-50 relative w-[108.921px]" data-node-id="109:330" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (5) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ee29b1eb-95fa-4ebc-a3d7-e0dab9c399d1.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+2.39px)] top-[63.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1411.395px_46.945px,_-1411.395px_46.945px,_-1411.395px_46.945px] opacity-50 relative w-[108.921px]" data-node-id="109:331" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (6) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c3420684-2707-44bf-91df-9489fab32d67.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+21.12px)] top-[-235.2px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1052.121px_345.203px,_-1052.121px_345.203px,_-1052.121px_345.203px] opacity-50 relative w-[108.921px]" data-node-id="109:332" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (7) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/45556651-4746-4b16-b007-63c51abbca22.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+57.82px)] top-[541.47px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-962.816px_-431.469px,_-962.816px_-431.469px,_-962.816px_-431.469px] opacity-50 relative w-[108.921px]" data-node-id="109:333" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (8) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/cd8aa759-0561-4edd-a08c-86376b782b2a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+9.95px)] top-[414.23px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1040.945px_-304.235px,_-1040.945px_-304.235px,_-1040.945px_-304.235px] opacity-50 relative w-[108.921px]" data-node-id="109:334" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (9) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9b0fa5bf-75ed-4b85-a8c3-362098e2237e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+25.85px)] top-[460.65px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1182.852px_-350.649px,_-1182.852px_-350.649px,_-1182.852px_-350.649px] opacity-50 relative w-[108.921px]" data-node-id="109:335" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (10) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/29a638bf-8c24-403d-b5ee-852d133d87ed.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+53.09px)] top-[-154.38px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-832.086px_264.382px,_-832.086px_264.382px,_-832.086px_264.382px] opacity-50 relative w-[108.921px]" data-node-id="109:336" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (11) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d13dad2e-d5ef-4dbd-9186-765f0e0eb643.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+63.51px)] top-[569.37px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1472.508px_-459.368px,_-1472.508px_-459.368px,_-1472.508px_-459.368px] opacity-50 relative w-[108.921px]" data-node-id="109:337" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (12) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/47fee460-43eb-40cc-84d1-9a7ac057ff97.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+72.01px)] top-[252.59px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1481.012px_-142.594px,_-1481.012px_-142.594px,_-1481.012px_-142.594px] opacity-50 relative w-[108.921px]" data-node-id="109:338" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (13) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a80b85a9-fb27-431a-8a8f-d2689a32190d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+100.96px)] top-[-27.15px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-753.961px_137.148px,_-753.961px_137.148px,_-753.961px_137.148px] opacity-50 relative w-[108.921px]" data-node-id="109:339" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (14) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/5ba2d1d8-2b10-4e15-ab68-232b7e6292f0.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+1.44px)] top-[731.01px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1032.438px_-621.008px,_-1032.438px_-621.008px,_-1032.438px_-621.008px] opacity-50 relative w-[108.921px]" data-node-id="109:340" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63d1ef5e-00f0-4638-84f0-35aafffdb0b6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+79.56px)] top-[603.77px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1110.563px_-493.774px,_-1110.563px_-493.774px,_-1110.563px_-493.774px] opacity-50 relative w-[108.921px]" data-node-id="109:341" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/6273ad2a-9d37-4043-b3ff-4b1c1b0bef46.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+95.47px)] top-[650.19px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1252.473px_-540.188px,_-1252.473px_-540.188px,_-1252.473px_-540.188px] opacity-50 relative w-[108.921px]" data-node-id="109:342" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c66d4a50-ed78-45ba-ab38-3fb3c513bfe7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+34.36px)] top-[143.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1191.359px_-33.876px,_-1191.359px_-33.876px,_-1191.359px_-33.876px] opacity-50 relative w-[108.921px]" data-node-id="109:343" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/03bd8b3e-8641-438a-b20b-80c8b1ea8813.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(100%+15.63px)] top-[442.13px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1550.633px_-332.133px,_-1550.633px_-332.133px,_-1550.633px_-332.133px] opacity-50 relative w-[108.921px]" data-node-id="109:344" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI 99">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a1e336d6-7666-42c1-9f97-d20420bbde29.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rs-c2"><div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:262" data-name="coveri_back_image">
        <div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:264" data-name="coveri_back_image">
          <div className="absolute contents left-[-23px] top-[110px]" data-node-id="109:266" data-name="Mask group">
            <div className="absolute contents left-[-215.59px] top-[-316.02px]" data-node-id="109:268">
              <div className="absolute contents left-[-215.59px] top-[-130.73px]" data-node-id="109:269" data-name="Mask group">
                <div className="absolute bg-gradient-to-b from-[rgba(3,22,42,0.76)] h-[864.613px] left-[calc(8.33%+41.59px)] mask-position-[-190.586px_10.57px,_-190.586px_10.57px,_-190.586px_10.57px] opacity-50 to-[91.08%] to-[rgba(5,37,72,0)] top-[99.43px] w-[397.683px]" data-node-id="109:270" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Foreground Color" />
                <div className="absolute contents h-[1306.76px] left-[-215.59px] top-[-130.73px] w-[1139.478px]" data-node-id="109:271">
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-215.59px] top-[111.73px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[192.586px_-1.727px,_192.586px_-1.727px,_192.586px_-1.727px] opacity-50 relative w-[108.921px]" data-node-id="109:272" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00110 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/81869bfb-17c7-4f85-9f8f-7b068f395c37.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+33.6px)] top-[456.4px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-308.598px_-346.399px,_-308.598px_-346.399px,_-308.598px_-346.399px] opacity-50 relative w-[108.921px]" data-node-id="109:273" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00113 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/512148f5-8856-4137-87ff-d64f170d3496.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+71.25px)] top-[565.12px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-598.25px_-455.118px,_-598.25px_-455.118px,_-598.25px_-455.118px] opacity-50 relative w-[108.921px]" data-node-id="109:274" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00119 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73d6e744-7624-4e7c-8f68-81f1a85107f6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+20.36px)] top-[77.32px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-169.359px_32.679px,_-169.359px_32.679px,_-169.359px_32.679px] opacity-50 relative w-[108.921px]" data-node-id="109:275" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00158 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b795dd1c-435a-4578-8a43-0af4df6d0c3d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[62.89px] top-[869.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-85.891px_-759.883px,_-85.891px_-759.883px,_-85.891px_-759.883px] opacity-50 relative w-[108.921px]" data-node-id="109:276" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00165 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0c76f7c2-3115-462c-a1c4-d26e446baf09.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%-11.61px)] top-[-3.5px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-389.395px_113.499px,_-389.395px_113.499px,_-389.395px_113.499px] opacity-50 relative w-[108.921px]" data-node-id="109:277" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00170 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63257a71-db15-46c8-922c-3e3891bc9153.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[74.07px] top-[220.45px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-97.07px_-110.446px,_-97.07px_-110.446px,_-97.07px_-110.446px] opacity-50 relative w-[108.921px]" data-node-id="109:278" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00222 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a3ee1a57-3847-44e0-9f79-541d43f52346.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-145.96px] top-[301.27px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[122.965px_-191.266px,_122.965px_-191.266px,_122.965px_-191.266px] opacity-50 relative w-[108.921px]" data-node-id="109:279" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00230 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9496fe97-3b39-4035-a53a-4d4e7c1f97b2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-4.05px] top-[347.68px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-18.945px_-237.68px,_-18.945px_-237.68px,_-18.945px_-237.68px] opacity-50 relative w-[108.921px]" data-node-id="109:280" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00311 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73666ac1-776e-4d56-90b5-6c11606f528e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+66.52px)] top-[-130.73px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-467.519px_240.734px,_-467.519px_240.734px,_-467.519px_240.734px] opacity-50 relative w-[108.921px]" data-node-id="109:281" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00316 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/058fa5ae-2e3d-4438-b455-22643f8bd07b.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+89.98px)] top-[266.86px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-238.977px_-156.86px,_-238.977px_-156.86px,_-238.977px_-156.86px] opacity-50 relative w-[108.921px]" data-node-id="109:282" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00330 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d841f431-b4f0-4675-ad51-ed4ebd99106c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+42.1px)] top-[139.63px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-317.102px_-29.626px,_-317.102px_-29.626px,_-317.102px_-29.626px] opacity-50 relative w-[108.921px]" data-node-id="109:283" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00332 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/720da060-5b81-40d1-bad3-66701115ef38.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+58.01px)] top-[186.04px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-459.012px_-76.04px,_-459.012px_-76.04px,_-459.012px_-76.04px] opacity-50 relative w-[108.921px]" data-node-id="109:284" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00412 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/06cfb961-9c95-4fa3-a621-917e20a9a8f2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-76.35px] top-[490.81px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[53.348px_-380.805px,_53.348px_-380.805px,_53.348px_-380.805px] opacity-50 relative w-[108.921px]" data-node-id="109:285" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI_00408_ 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0789826a-d865-4b29-bc5f-30818471faf5.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+1.63px)] top-[375.58px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-528.633px_-265.579px,_-528.633px_-265.579px,_-528.633px_-265.579px] opacity-50 relative w-[108.921px]" data-node-id="109:286" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00132 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ffba8fda-72a7-45e1-8581-dd12938c8837.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-6.73px] top-[680.34px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-16.273px_-570.344px,_-16.273px_-570.344px,_-16.273px_-570.344px] opacity-50 relative w-[108.921px]" data-node-id="109:287" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00345 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/bc9bddf7-e764-4797-b170-705bf6141e21.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[65.56px] top-[537.22px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-88.563px_-427.219px,_-88.563px_-427.219px,_-88.563px_-427.219px] opacity-50 relative w-[108.921px]" data-node-id="109:288" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/34a63c25-4387-41a3-8d83-7faaaba664c7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+17.69px)] top-[409.98px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-166.688px_-299.985px,_-166.688px_-299.985px,_-166.688px_-299.985px] opacity-50 relative w-[108.921px]" data-node-id="109:289" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a57e04f5-f55b-4fda-a18a-78774bcfbc2c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+10.14px)] top-[58.81px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-537.137px_51.195px,_-537.137px_51.195px,_-537.137px_51.195px] opacity-50 relative w-[108.921px]" data-node-id="109:290" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (3) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d6cc97eb-23a9-4b1a-84b1-9598c117c2cd.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%-1.04px)] top-[708.24px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-525.961px_-598.243px,_-525.961px_-598.243px,_-525.961px_-598.243px] opacity-50 relative w-[108.921px]" data-node-id="109:291" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (4) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c894a096-6f8a-410e-b4c6-091c9f35681a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+55.34px)] top-[518.7px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-456.34px_-408.704px,_-456.34px_-408.704px,_-456.34px_-408.704px] opacity-50 relative w-[108.921px]" data-node-id="109:292" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (5) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ee29b1eb-95fa-4ebc-a3d7-e0dab9c399d1.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+79.76px)] top-[248.34px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-606.758px_-138.344px,_-606.758px_-138.344px,_-606.758px_-138.344px] opacity-50 relative w-[108.921px]" data-node-id="109:293" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (6) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c3420684-2707-44bf-91df-9489fab32d67.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+98.48px)] top-[-49.91px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-247.485px_159.914px,_-247.485px_159.914px,_-247.485px_159.914px] opacity-50 relative w-[108.921px]" data-node-id="109:294" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (7) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/45556651-4746-4b16-b007-63c51abbca22.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+9.18px)] top-[726.76px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-158.18px_-616.758px,_-158.18px_-616.758px,_-158.18px_-616.758px] opacity-50 relative w-[108.921px]" data-node-id="109:295" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (8) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/cd8aa759-0561-4edd-a08c-86376b782b2a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+87.31px)] top-[599.52px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-236.309px_-489.524px,_-236.309px_-489.524px,_-236.309px_-489.524px] opacity-50 relative w-[108.921px]" data-node-id="109:296" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (9) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9b0fa5bf-75ed-4b85-a8c3-362098e2237e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+103.21px)] top-[645.94px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-378.215px_-535.938px,_-378.215px_-535.938px,_-378.215px_-535.938px] opacity-50 relative w-[108.921px]" data-node-id="109:297" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (10) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/29a638bf-8c24-403d-b5ee-852d133d87ed.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[4.45px] top-[30.91px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-27.449px_79.093px,_-27.449px_79.093px,_-27.449px_79.093px] opacity-50 relative w-[108.921px]" data-node-id="109:298" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (11) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d13dad2e-d5ef-4dbd-9186-765f0e0eb643.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+14.87px)] top-[754.66px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-667.871px_-644.657px,_-667.871px_-644.657px,_-667.871px_-644.657px] opacity-50 relative w-[108.921px]" data-node-id="109:299" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (12) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/47fee460-43eb-40cc-84d1-9a7ac057ff97.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+23.38px)] top-[437.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-676.375px_-327.883px,_-676.375px_-327.883px,_-676.375px_-327.883px] opacity-50 relative w-[108.921px]" data-node-id="109:300" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (13) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a80b85a9-fb27-431a-8a8f-d2689a32190d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[-73.68px] top-[158.14px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[50.676px_-48.141px,_50.676px_-48.141px,_50.676px_-48.141px] opacity-50 relative w-[108.921px]" data-node-id="109:301" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (14) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/5ba2d1d8-2b10-4e15-ab68-232b7e6292f0.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(8.33%+78.8px)] top-[916.3px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-227.801px_-806.297px,_-227.801px_-806.297px,_-227.801px_-806.297px] opacity-50 relative w-[108.921px]" data-node-id="109:302" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63d1ef5e-00f0-4638-84f0-35aafffdb0b6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(16.67%+30.93px)] top-[789.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-305.926px_-679.063px,_-305.926px_-679.063px,_-305.926px_-679.063px] opacity-50 relative w-[108.921px]" data-node-id="109:303" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/6273ad2a-9d37-4043-b3ff-4b1c1b0bef46.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%+46.84px)] top-[835.48px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-447.836px_-725.477px,_-447.836px_-725.477px,_-447.836px_-725.477px] opacity-50 relative w-[108.921px]" data-node-id="109:304" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c66d4a50-ed78-45ba-ab38-3fb3c513bfe7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(25%-14.28px)] top-[329.16px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-386.723px_-219.165px,_-386.723px_-219.165px,_-386.723px_-219.165px] opacity-50 relative w-[108.921px]" data-node-id="109:305" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/03bd8b3e-8641-438a-b20b-80c8b1ea8813.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+93px)] top-[627.42px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-745.996px_-517.422px,_-745.996px_-517.422px,_-745.996px_-517.422px] opacity-50 relative w-[108.921px]" data-node-id="109:306" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI 99">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a1e336d6-7666-42c1-9f97-d20420bbde29.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[calc(33.33%+85.05px)] top-[-316.02px]" data-node-id="109:307" data-name="Mask group">
                <div className="absolute bg-gradient-to-b from-[rgba(3,22,42,0.76)] h-[864.613px] left-[calc(58.33%+90.22px)] mask-position-[-995.223px_195.859px,_-995.223px_195.859px,_-995.223px_195.859px] opacity-50 to-[91.08%] to-[rgba(5,37,72,0)] top-[-85.86px] w-[397.683px]" data-node-id="109:308" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Foreground Color" />
                <div className="absolute contents h-[1306.76px] left-[calc(33.33%+85.05px)] top-[-316.02px] w-[1139.478px]" data-node-id="109:309">
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(33.33%+85.05px)] top-[-73.56px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-612.051px_183.562px,_-612.051px_183.562px,_-612.051px_183.562px] opacity-50 relative w-[108.921px]" data-node-id="109:310" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00110 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/81869bfb-17c7-4f85-9f8f-7b068f395c37.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+82.23px)] top-[271.11px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1113.234px_-161.11px,_-1113.234px_-161.11px,_-1113.234px_-161.11px] opacity-50 relative w-[108.921px]" data-node-id="109:311" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00113 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/512148f5-8856-4137-87ff-d64f170d3496.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+119.89px)] top-[379.83px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1402.887px_-269.829px,_-1402.887px_-269.829px,_-1402.887px_-269.829px] opacity-50 relative w-[108.921px]" data-node-id="109:312" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00119 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73d6e744-7624-4e7c-8f68-81f1a85107f6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+69px)] top-[-107.97px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-973.996px_217.968px,_-973.996px_217.968px,_-973.996px_217.968px] opacity-50 relative w-[108.921px]" data-node-id="109:313" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00158 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b795dd1c-435a-4578-8a43-0af4df6d0c3d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+111.53px)] top-[684.59px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-890.527px_-574.594px,_-890.527px_-574.594px,_-890.527px_-574.594px] opacity-50 relative w-[108.921px]" data-node-id="109:314" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00165 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0c76f7c2-3115-462c-a1c4-d26e446baf09.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+37.03px)] top-[-188.79px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1194.031px_298.789px,_-1194.031px_298.789px,_-1194.031px_298.789px] opacity-50 relative w-[108.921px]" data-node-id="109:315" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00170 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63257a71-db15-46c8-922c-3e3891bc9153.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%-3.29px)] top-[35.16px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-901.707px_74.843px,_-901.707px_74.843px,_-901.707px_74.843px] opacity-50 relative w-[108.921px]" data-node-id="109:316" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00222 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a3ee1a57-3847-44e0-9f79-541d43f52346.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+28.67px)] top-[115.98px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-681.672px_-5.977px,_-681.672px_-5.977px,_-681.672px_-5.977px] opacity-50 relative w-[108.921px]" data-node-id="109:317" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00230 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9496fe97-3b39-4035-a53a-4d4e7c1f97b2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+44.58px)] top-[162.39px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-823.582px_-52.391px,_-823.582px_-52.391px,_-823.582px_-52.391px] opacity-50 relative w-[108.921px]" data-node-id="109:318" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00311 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/73666ac1-776e-4d56-90b5-6c11606f528e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+115.16px)] top-[-316.02px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1272.156px_426.023px,_-1272.156px_426.023px,_-1272.156px_426.023px] opacity-50 relative w-[108.921px]" data-node-id="109:319" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00316 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/058fa5ae-2e3d-4438-b455-22643f8bd07b.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+12.61px)] top-[81.57px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1043.613px_28.429px,_-1043.613px_28.429px,_-1043.613px_28.429px] opacity-50 relative w-[108.921px]" data-node-id="109:320" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00330 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d841f431-b4f0-4675-ad51-ed4ebd99106c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+90.74px)] top-[-45.66px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1121.738px_155.664px,_-1121.738px_155.664px,_-1121.738px_155.664px] opacity-50 relative w-[108.921px]" data-node-id="109:321" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00332 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/720da060-5b81-40d1-bad3-66701115ef38.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+106.65px)] top-[0.75px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1263.648px_109.249px,_-1263.648px_109.249px,_-1263.648px_109.249px] opacity-50 relative w-[108.921px]" data-node-id="109:322" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI 00412 Realistic 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/06cfb961-9c95-4fa3-a621-917e20a9a8f2.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+98.29px)] top-[305.52px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-751.289px_-195.516px,_-751.289px_-195.516px,_-751.289px_-195.516px] opacity-50 relative w-[108.921px]" data-node-id="109:323" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="ComfyUI_00408_ 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0789826a-d865-4b29-bc5f-30818471faf5.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+50.27px)] top-[190.29px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1333.27px_-80.29px,_-1333.27px_-80.29px,_-1333.27px_-80.29px] opacity-50 relative w-[108.921px]" data-node-id="109:324" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00132 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ffba8fda-72a7-45e1-8581-dd12938c8837.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+41.91px)] top-[495.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-820.91px_-385.055px,_-820.91px_-385.055px,_-820.91px_-385.055px] opacity-50 relative w-[108.921px]" data-node-id="109:325" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic ComfyUI 00345 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/bc9bddf7-e764-4797-b170-705bf6141e21.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+114.2px)] top-[351.93px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-893.199px_-241.93px,_-893.199px_-241.93px,_-893.199px_-241.93px] opacity-50 relative w-[108.921px]" data-node-id="109:326" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/34a63c25-4387-41a3-8d83-7faaaba664c7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+66.32px)] top-[224.7px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-971.324px_-114.696px,_-971.324px_-114.696px,_-971.324px_-114.696px] opacity-50 relative w-[108.921px]" data-node-id="109:327" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a57e04f5-f55b-4fda-a18a-78774bcfbc2c.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+58.77px)] top-[-126.48px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1341.773px_236.484px,_-1341.773px_236.484px,_-1341.773px_236.484px] opacity-50 relative w-[108.921px]" data-node-id="109:328" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (3) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d6cc97eb-23a9-4b1a-84b1-9598c117c2cd.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(83.33%+47.6px)] top-[522.95px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1330.598px_-412.954px,_-1330.598px_-412.954px,_-1330.598px_-412.954px] opacity-50 relative w-[108.921px]" data-node-id="109:329" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (4) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c894a096-6f8a-410e-b4c6-091c9f35681a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+103.98px)] top-[333.41px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1260.977px_-223.415px,_-1260.977px_-223.415px,_-1260.977px_-223.415px] opacity-50 relative w-[108.921px]" data-node-id="109:330" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (5) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ee29b1eb-95fa-4ebc-a3d7-e0dab9c399d1.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+2.39px)] top-[63.06px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1411.395px_46.945px,_-1411.395px_46.945px,_-1411.395px_46.945px] opacity-50 relative w-[108.921px]" data-node-id="109:331" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (6) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c3420684-2707-44bf-91df-9489fab32d67.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+21.12px)] top-[-235.2px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1052.121px_345.203px,_-1052.121px_345.203px,_-1052.121px_345.203px] opacity-50 relative w-[108.921px]" data-node-id="109:332" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (7) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/45556651-4746-4b16-b007-63c51abbca22.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(58.33%+57.82px)] top-[541.47px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-962.816px_-431.469px,_-962.816px_-431.469px,_-962.816px_-431.469px] opacity-50 relative w-[108.921px]" data-node-id="109:333" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (8) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/cd8aa759-0561-4edd-a08c-86376b782b2a.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+9.95px)] top-[414.23px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1040.945px_-304.235px,_-1040.945px_-304.235px,_-1040.945px_-304.235px] opacity-50 relative w-[108.921px]" data-node-id="109:334" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (9) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9b0fa5bf-75ed-4b85-a8c3-362098e2237e.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+25.85px)] top-[460.65px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1182.852px_-350.649px,_-1182.852px_-350.649px,_-1182.852px_-350.649px] opacity-50 relative w-[108.921px]" data-node-id="109:335" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (10) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/29a638bf-8c24-403d-b5ee-852d133d87ed.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(50%+53.09px)] top-[-154.38px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-832.086px_264.382px,_-832.086px_264.382px,_-832.086px_264.382px] opacity-50 relative w-[108.921px]" data-node-id="109:336" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (11) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d13dad2e-d5ef-4dbd-9186-765f0e0eb643.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+63.51px)] top-[569.37px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1472.508px_-459.368px,_-1472.508px_-459.368px,_-1472.508px_-459.368px] opacity-50 relative w-[108.921px]" data-node-id="109:337" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (12) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/47fee460-43eb-40cc-84d1-9a7ac057ff97.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(91.67%+72.01px)] top-[252.59px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1481.012px_-142.594px,_-1481.012px_-142.594px,_-1481.012px_-142.594px] opacity-50 relative w-[108.921px]" data-node-id="109:338" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (13) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a80b85a9-fb27-431a-8a8f-d2689a32190d.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(41.67%+100.96px)] top-[-27.15px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-753.961px_137.148px,_-753.961px_137.148px,_-753.961px_137.148px] opacity-50 relative w-[108.921px]" data-node-id="109:339" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts (14) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/5ba2d1d8-2b10-4e15-ab68-232b7e6292f0.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+1.44px)] top-[731.01px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1032.438px_-621.008px,_-1032.438px_-621.008px,_-1032.438px_-621.008px] opacity-50 relative w-[108.921px]" data-node-id="109:340" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN Shorts 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/63d1ef5e-00f0-4638-84f0-35aafffdb0b6.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(66.67%+79.56px)] top-[603.77px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1110.563px_-493.774px,_-1110.563px_-493.774px,_-1110.563px_-493.774px] opacity-50 relative w-[108.921px]" data-node-id="109:341" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/6273ad2a-9d37-4043-b3ff-4b1c1b0bef46.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+95.47px)] top-[650.19px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1252.473px_-540.188px,_-1252.473px_-540.188px,_-1252.473px_-540.188px] opacity-50 relative w-[108.921px]" data-node-id="109:342" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (1) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/c66d4a50-ed78-45ba-ab38-3fb3c513bfe7.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(75%+34.36px)] top-[143.88px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1191.359px_-33.876px,_-1191.359px_-33.876px,_-1191.359px_-33.876px] opacity-50 relative w-[108.921px]" data-node-id="109:343" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI (2) 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/03bd8b3e-8641-438a-b20b-80c8b1ea8813.webp"} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[219.317px] items-center justify-center left-[calc(100%+15.63px)] top-[442.13px] w-[169.005px]">
                    <div className="flex-none rotate-[-20.17deg]">
                      <div className="h-[193.637px] mask-position-[-1550.633px_-332.133px,_-1550.633px_-332.133px,_-1550.633px_-332.133px] opacity-50 relative w-[108.921px]" data-node-id="109:344" style={{ maskImage: `url("${"/reelsaga/f7f8725a-5634-4667-bcf6-0859e8643cb9.svg"}"), url("${"/reelsaga/5d8d3c7e-2c32-4d29-bfaa-1ad797f53d60.svg"}"), url("${"/reelsaga/34e53a6b-5f02-448c-836e-00596d44d409.svg"}")` }} data-name="Realistic NAN-Shorts ComfyUI 99">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/a1e336d6-7666-42c1-9f97-d20420bbde29.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
      <div className="absolute h-[56px] left-0 overflow-clip top-[56px] w-[1512px]" data-node-id="109:179" data-name="Semengted Control">
        <div className="-translate-x-1/2 absolute h-[8px] left-1/2 opacity-40 top-[54px] w-[1396px]" data-node-id="109:180" data-name="Separator">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d46e7fbc-c225-4771-b276-e8e6a210e37c.webp"} />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex font-['Roboto:SemiBold'] font-semibold gap-[48px] items-center justify-center leading-[1.3] left-[383px] text-[16px] top-[20px] whitespace-nowrap" data-node-id="109:182">
          <p className="relative shrink-0 text-[color:var(--color,#fec200)]" data-node-id="109:183" style={{ fontVariationSettings: '"wdth" 100' }}>
            Home
          </p>
          <p className="relative shrink-0 text-[rgba(235,235,245,0.6)]" data-node-id="109:184" style={{ fontVariationSettings: '"wdth" 100' }}>
            Realistic
          </p>
          <p className="relative shrink-0 text-[rgba(235,235,245,0.6)]" data-node-id="109:185" style={{ fontVariationSettings: '"wdth" 100' }}>
            Animated
          </p>
          <p className="relative shrink-0 text-[rgba(235,235,245,0.6)]" data-node-id="109:186" style={{ fontVariationSettings: '"wdth" 100' }}>
            Books
          </p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex font-['Roboto:SemiBold'] font-semibold gap-[48px] items-center justify-end leading-[1.3] right-[132px] text-[16px] text-[rgba(235,235,245,0.6)] top-[20px] whitespace-nowrap" data-node-id="109:187">
          <p className="relative shrink-0" data-node-id="109:188" style={{ fontVariationSettings: '"wdth" 100' }}>
            Blog
          </p>
          <p className="relative shrink-0" data-node-id="109:189" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sign in
          </p>
        </div>
      </div>
      <div className="absolute contents left-[calc(8.33%+2px)] top-[66px]" data-node-id="109:190">
        <div className="absolute contents left-[calc(8.33%+80.84px)] top-[73.2px]" data-node-id="109:191">
          <div className="absolute contents left-[calc(8.33%+80.84px)] top-[73.2px]" data-node-id="109:219">
            <p className="[word-break:break-word] absolute font-['Comfortaa:Light'] font-light leading-[normal] left-[calc(8.33%+80.84px)] text-[#fec200] text-[20.131px] top-[73.2px] tracking-[0.3145px] whitespace-nowrap" data-node-id="109:220">
              saga
            </p>
          </div>
        </div>
        <div className="absolute contents left-[calc(8.33%+35.09px)] top-[73.2px]" data-node-id="109:221">
          <div className="absolute contents left-[calc(8.33%+35.09px)] top-[73.2px]" data-node-id="109:249">
            <p className="[word-break:break-word] absolute font-['Comfortaa:Bold'] font-bold leading-[normal] left-[calc(8.33%+35.09px)] text-[#fec200] text-[20.131px] top-[73.2px] tracking-[0.3145px] whitespace-nowrap" data-node-id="109:250">
              Reel
            </p>
          </div>
        </div>
        <div className="absolute contents left-[calc(8.33%+2px)] top-[66px]" data-node-id="109:251">
          <div className="absolute contents left-[calc(8.33%+2px)] top-[66px]" data-node-id="109:252">
            <div className="absolute contents left-[calc(8.33%+2px)] top-[66px]" data-node-id="109:253">
              <div className="absolute left-[calc(8.33%+2px)] size-[36.787px] top-[66px]" data-node-id="109:254" data-name="Gemini Generated Image (24) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/f80243f1-cde6-4663-97ec-f01f5d258d06.webp"} />
              </div>
              <div className="absolute contents left-[calc(8.33%+6.34px)] top-[68.26px]" data-node-id="109:255">
                <div className="absolute h-[19.832px] left-[calc(8.33%+13.94px)] top-[73.03px] w-[15.19px]" data-node-id="109:256">
                  <div className="absolute inset-[-6.39%_-8.33%_-6.38%_-8.33%]">
                    <img alt="" className="block max-w-none size-full" src={"/reelsaga/cf2bfdf0-5945-4cbe-b302-82121f85ce68.svg"} />
                  </div>
                </div>
                <div className="absolute left-[calc(8.33%+6.34px)] size-[28.068px] top-[68.26px]" data-node-id="109:261" data-name="logo_reel_saga 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/dad86a23-7bb7-45d7-9469-14c2c66dec80.webp"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:"absolute",left:132,top:245,width:428,height:90,cursor:"default"}}><p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative size-full text-[0px] text-white whitespace-pre" data-node-id="109:441" style={{ fontVariationSettings: '"wdth" 100' }}>
      <span className="leading-[normal] text-[38px]">{`Epic naslov o  `}</span>
      <span className="font-['Roboto:Italic'] font-normal italic leading-[normal] text-[#fec200] text-[38px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        animiranim
      </span>
      <span className="leading-[normal] text-[38px]">
        <br aria-hidden />
        Reelovima...
      </span>
    </p></div>
      <div style={{position:"absolute",left:138,top:532,width:200,height:43,cursor:"pointer"}} onClick={()=>go("1")}><div className="bg-[#fec200] content-stretch flex gap-[8.384px] items-center justify-center px-[25.151px] relative rounded-[91.074px] size-full" data-node-id="109:437" data-name="PlayBTN">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#050e27] text-[17.675px] text-center whitespace-nowrap" data-node-id="109:439" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Download the app</p>
      </div>
      <div className="h-[17.954px] relative shrink-0 w-[20.931px]" data-node-id="109:440" data-name="Vector">
        <div className="absolute inset-[-5.18%_-4.44%]">
          <img alt="" className="block max-w-none size-full" src={"/reelsaga/effcd982-c933-4525-bcd3-4f85c56a9a26.svg"} />
        </div>
      </div>
    </div></div>
      <div style={{position:"absolute",left:370,top:532,width:166,height:43,cursor:"pointer"}} onClick={()=>go("1")}><div className="bg-[#03162a] border-[1.507px] border-solid border-white content-stretch flex gap-[8.559px] items-center justify-center px-[25.676px] relative rounded-[92.974px] size-full" data-node-id="109:428" data-name="PlayBTN">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[17.675px] text-center text-white whitespace-nowrap" data-node-id="109:436" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Browse Animated</p>
      </div>
    </div></div>
      <div className="contents relative size-full" data-node-id="109:447">
      <div className="absolute contents left-[calc(41.67%+26px)] top-[163px]" data-node-id="109:448" data-name="Mask group">
        <div className="absolute contents left-[calc(33.33%-1px)] top-[163px]" data-node-id="109:450">
          <div className="absolute h-[441.207px] left-[calc(33.33%+1.15px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[150.852px_0px] mask-size-[286.014px_441.253px] top-[163px] w-[657.637px]" data-node-id="109:451" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="My Twins Have Two Daddies Cover 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/68f16ee3-d2c3-4fd3-b30b-d5c32e85f57a.webp"} />
          </div>
          <div className="absolute h-[441.252px] left-[calc(33.33%-1px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[153.004px_0px] mask-size-[286.014px_441.253px] top-[163px] w-[661.879px]" data-node-id="109:452" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="Anime NAN Shorts Cover 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9a01b57e-c88e-4390-9723-5b457c6e413e.webp"} />
          </div>
          <div className="absolute h-[441.207px] left-[calc(33.33%+1.15px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[150.852px_0px] mask-size-[286.014px_441.253px] top-[163px] w-[657.637px]" data-node-id="109:453" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="Anime NAN Shorts Cover (1) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ec938aec-9417-4c02-82d8-849f295afd4f.webp"} />
          </div>
          <div className="absolute h-[441.252px] left-[calc(33.33%-1px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[153.004px_0px] mask-size-[286.014px_441.253px] top-[163px] w-[661.879px]" data-node-id="109:454" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="Anime NAN Shorts Cover (2) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/e115d66a-14c2-4634-a3c2-e6b34d8c8dd5.webp"} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(58.33%-7px)] top-[163px]" data-node-id="109:455" data-name="Mask group">
        <div className="absolute contents left-[calc(25%+67.88px)] top-[84.36px]" data-node-id="109:457">
          <div className="absolute h-[441.207px] left-[calc(41.67%+94.15px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[150.852px_0px] mask-size-[286.014px_441.253px] top-[163px] w-[657.637px]" data-node-id="109:458" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="My Twins Have Two Daddies Cover 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/68f16ee3-d2c3-4fd3-b30b-d5c32e85f57a.webp"} />
          </div>
          <div className="absolute h-[812.604px] left-[calc(25%+67.88px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[429.117px_78.641px] mask-size-[286.014px_441.253px] top-[84.36px] w-[1218.905px]" data-node-id="109:459" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="Anime NAN Shorts Cover 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/9a01b57e-c88e-4390-9723-5b457c6e413e.webp"} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(66.67%+86.39px)] top-[163px]" data-node-id="109:462" data-name="Mask group">
        <div className="absolute contents left-[calc(50%+82.67px)] top-[125.42px]" data-node-id="109:464">
          <div className="absolute h-[591.541px] left-[calc(50%+82.67px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[255.723px_37.578px] mask-size-[286.014px_441.253px] top-[125.42px] w-[881.631px]" data-node-id="109:467" style={{ maskImage: `url("${"/reelsaga/ce2b7fc6-9d2e-4370-8fca-ce5470697381.svg"}")` }} data-name="Anime NAN Shorts Cover (1) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/ec938aec-9417-4c02-82d8-849f295afd4f.webp"} />
          </div>
        </div>
      </div>
    </div>
      <div className="contents relative size-full" data-node-id="109:473">
      <div className="[word-break:break-word] absolute font-['Roboto:Bold'] font-bold leading-[0] left-[calc(8.33%+6px)] text-[0px] text-white top-[824px] whitespace-nowrap" data-node-id="109:474" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 text-[28px]">Sagas you won’t</p>
        <p className="text-[28px]">
          <span className="leading-[normal]">{`find `}</span>
          <span className="[word-break:break-word] font-['Roboto:Italic'] font-normal italic leading-[normal] text-[#fec200]" style={{ fontVariationSettings: '"wdth" 100' }}>
            anywhere else.
          </span>
          <span className="leading-[normal]">
            <br aria-hidden />
            <br aria-hidden />
          </span>
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular'] font-normal h-[135px] leading-[1.5] left-[calc(58.33%+498px)] text-[15px] text-right text-white top-[824px] w-[380px]" data-node-id="109:475" style={{ fontVariationSettings: '"wdth" 100' }}>
        ReelSaga is the home of serialized vertical fiction. New chapters drop daily - crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.
      </p>
      <div className="-translate-x-1/2 absolute h-[2px] left-1/2 opacity-40 top-[706px] w-[1396px]" data-node-id="109:476" data-name="Separator">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/3dd89a64-e750-450f-8e12-237743c6973e.webp"} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:SemiBold'] font-semibold h-[102px] justify-center leading-[0] left-[calc(41.67%-499px)] text-[#fec200] text-[38px] top-[767px] tracking-[1.2069px] w-[994px]" data-node-id="109:477" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[123.709px]">Originals</p>
      </div>
      <div className="absolute contents left-[calc(8.33%-10px)] top-[931px]" data-node-id="109:478" data-name="Mask group">
        <div className="absolute contents left-[calc(8.33%+9.36px)] top-[946.74px]" data-node-id="109:480">
          <div className="absolute contents left-[calc(8.33%+9.36px)] top-[946.74px]" data-node-id="109:481">
            <div className="absolute contents left-[calc(8.33%+9.36px)] top-[946.74px]" data-node-id="109:482">
              <div className="absolute contents left-[calc(8.33%+9.36px)] top-[946.74px]" data-node-id="109:484" data-name="Mask group">
                <div className="absolute contents left-[-38.8px] top-[943.98px]" data-node-id="109:486">
                  <div className="absolute h-[364.937px] left-[-38.8px] mask-position-[154.801px_-12.977px,_174.156px_2.766px] top-[943.98px] w-[589.552px]" data-node-id="109:487" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="The Phantom's Kiss Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/71cd28d2-a0f8-4b49-a1c0-0ecc926b5e24.webp"} />
                  </div>
                  <div className="absolute h-[364.224px] left-[calc(8.33%+7.96px)] mask-position-[-17.961px_-13.453px,_1.395px_2.289px] top-[944.45px] w-[244.291px]" data-node-id="109:488" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Billionaire Husband Vampire King Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/84aa4872-5c89-4b4e-a3eb-86cdb5e480a4.webp"} />
                  </div>
                  <div className="absolute h-[363.511px] left-[calc(8.33%+7.96px)] mask-position-[-17.961px_-13.688px,_1.395px_2.055px] top-[944.69px] w-[244.291px]" data-node-id="109:489" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Anime Preview (1) 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b0e0699d-e4f4-4e94-9b5b-ec48eca23b06.webp"} />
                  </div>
                  <div className="absolute h-[364.937px] left-[calc(8.33%+7.72px)] mask-position-[-17.723px_-12.977px,_1.633px_2.766px] top-[943.98px] w-[244.767px]" data-node-id="109:490" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="One Deadly Night Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/663b02de-f87f-49c8-964e-6a64dff8e722.webp"} />
                  </div>
                  <div className="absolute h-[363.036px] left-[calc(8.33%+7.96px)] mask-position-[-17.961px_-13.93px,_1.395px_1.813px] top-[944.93px] w-[244.529px]" data-node-id="109:491" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Cursed By My Dead Husband's Rival Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/da98073b-36ef-4cb4-b740-89d673cc38fe.webp"} />
                  </div>
                  <div className="absolute h-[364.937px] left-[calc(8.33%+8.44px)] mask-position-[-18.438px_-12.977px,_0.918px_2.766px] top-[943.98px] w-[243.341px]" data-node-id="109:492" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Anime Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/97ffc089-76b5-41ae-89c0-865c901aed97.webp"} />
                  </div>
                  <div className="absolute h-[364.937px] left-[calc(8.33%+8.44px)] mask-position-[-18.438px_-13.93px,_0.918px_1.813px] top-[944.93px] w-[243.341px]" data-node-id="109:493" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Anime NAN-Shorts Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/bcd3e93f-5be8-415f-830c-7dea5d613dd2.webp"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(25%+39.76px)] top-[946.74px]" data-node-id="109:501">
            <div className="absolute contents left-[calc(25%+39.76px)] top-[946.74px]" data-node-id="109:502">
              <div className="absolute contents left-[calc(25%+39.76px)] top-[946.74px]" data-node-id="109:504" data-name="Mask group">
                <div className="absolute contents left-[calc(16.67%-8.4px)] top-[943.98px]" data-node-id="109:506">
                  <div className="absolute h-[364.949px] left-[calc(16.67%-8.4px)] mask-position-[-127.602px_-12.977px,_174.156px_2.766px] top-[943.98px] w-[589.533px]" data-node-id="109:507" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="The Phantom's Kiss Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/71cd28d2-a0f8-4b49-a1c0-0ecc926b5e24.webp"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(41.67%+70.16px)] top-[946.74px]" data-node-id="109:521">
            <div className="absolute contents left-[calc(41.67%+70.16px)] top-[946.74px]" data-node-id="109:522">
              <div className="absolute contents left-[calc(41.67%+70.16px)] top-[946.74px]" data-node-id="109:524" data-name="Mask group">
                <div className="absolute contents left-[calc(33.33%+22px)] top-[943.98px]" data-node-id="109:526">
                  <div className="absolute h-[364.949px] left-[calc(33.33%+22px)] mask-position-[-410.004px_-12.977px,_174.156px_2.766px] top-[943.98px] w-[589.533px]" data-node-id="109:527" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="The Phantom's Kiss Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/71cd28d2-a0f8-4b49-a1c0-0ecc926b5e24.webp"} />
                  </div>
                  <div className="absolute h-[364.236px] left-[calc(41.67%+68.76px)] mask-position-[-582.758px_-13.453px,_1.402px_2.289px] top-[944.45px] w-[244.283px]" data-node-id="109:528" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Billionaire Husband Vampire King Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/84aa4872-5c89-4b4e-a3eb-86cdb5e480a4.webp"} />
                  </div>
                  <div className="absolute h-[363.523px] left-[calc(41.67%+68.76px)] mask-position-[-582.758px_-13.688px,_1.402px_2.055px] top-[944.69px] w-[244.283px]" data-node-id="109:529" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Anime Preview (1) 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b0e0699d-e4f4-4e94-9b5b-ec48eca23b06.webp"} />
                  </div>
                  <div className="absolute h-[364.949px] left-[calc(41.67%+68.52px)] mask-position-[-582.52px_-12.977px,_1.641px_2.766px] top-[943.98px] w-[244.759px]" data-node-id="109:530" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="One Deadly Night Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/663b02de-f87f-49c8-964e-6a64dff8e722.webp"} />
                  </div>
                  <div className="absolute h-[363.048px] left-[calc(41.67%+68.76px)] mask-position-[-582.758px_-13.93px,_1.402px_1.813px] top-[944.93px] w-[244.521px]" data-node-id="109:531" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Cursed By My Dead Husband's Rival Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/da98073b-36ef-4cb4-b740-89d673cc38fe.webp"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(58.33%+100.56px)] top-[946.74px]" data-node-id="109:541">
            <div className="absolute contents left-[calc(58.33%+100.56px)] top-[946.74px]" data-node-id="109:542">
              <div className="absolute contents left-[calc(58.33%+100.56px)] top-[946.74px]" data-node-id="109:544" data-name="Mask group">
                <div className="absolute contents left-[calc(50%+52.41px)] top-[943.98px]" data-node-id="109:546">
                  <div className="absolute h-[364.949px] left-[calc(50%+52.41px)] mask-position-[-692.406px_-12.977px,_174.156px_2.766px] top-[943.98px] w-[589.533px]" data-node-id="109:547" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="The Phantom's Kiss Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/71cd28d2-a0f8-4b49-a1c0-0ecc926b5e24.webp"} />
                  </div>
                  <div className="absolute h-[364.236px] left-[calc(58.33%+99.16px)] mask-position-[-865.164px_-13.453px,_1.398px_2.289px] top-[944.45px] w-[244.283px]" data-node-id="109:548" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Billionaire Husband Vampire King Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/84aa4872-5c89-4b4e-a3eb-86cdb5e480a4.webp"} />
                  </div>
                  <div className="absolute h-[363.523px] left-[calc(58.33%+99.16px)] mask-position-[-865.164px_-13.688px,_1.398px_2.055px] top-[944.69px] w-[244.283px]" data-node-id="109:549" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Anime Preview (1) 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b0e0699d-e4f4-4e94-9b5b-ec48eca23b06.webp"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(83.33%+4.96px)] top-[946.74px]" data-node-id="109:561">
            <div className="absolute contents left-[calc(83.33%+4.96px)] top-[946.74px]" data-node-id="109:562">
              <div className="absolute contents left-[calc(83.33%+4.96px)] top-[946.74px]" data-node-id="109:564" data-name="Mask group">
                <div className="absolute contents left-[calc(66.67%+82.8px)] top-[943.98px]" data-node-id="109:566">
                  <div className="absolute h-[364.949px] left-[calc(66.67%+82.8px)] mask-position-[-974.805px_-12.977px,_174.16px_2.766px] top-[943.98px] w-[589.533px]" data-node-id="109:567" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="The Phantom's Kiss Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/71cd28d2-a0f8-4b49-a1c0-0ecc926b5e24.webp"} />
                  </div>
                  <div className="absolute h-[364.236px] left-[calc(83.33%+3.56px)] mask-position-[-1147.563px_-13.453px,_1.402px_2.289px] top-[944.45px] w-[244.283px]" data-node-id="109:568" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}"), url("${"/reelsaga/4772f845-d96a-4bb9-9dcb-04eec664c54e.svg"}")` }} data-name="Billionaire Husband Vampire King Preview 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/84aa4872-5c89-4b4e-a3eb-86cdb5e480a4.webp"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[398.165px] left-[calc(83.33%+56px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1200px_0px] mask-size-[1264px_402px] top-[931px] w-[64.517px]" data-node-id="109:581" style={{ maskImage: `url("${"/reelsaga/920ca891-3273-4194-9642-2e32e0530a3c.svg"}")` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d5e87b4a-f6a0-4513-88aa-5affbc984a40.webp"} />
      </div>
      </div>
      <div className="absolute left-[calc(83.33%+85px)] size-[82px] top-[1087px]" data-node-id="109:582" data-name="icon_close_light">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[51.933px] top-1/2" data-node-id="109:583" data-name="">
          <div className="absolute inset-[-2.96%]">
            <img alt="" className="block max-w-none size-full" src={"/reelsaga/8dcef1db-9233-44c5-ab11-4c5ce2f20f43.svg"} />
          </div>
        </div>
        <div className="absolute left-0 size-[82px] top-0" data-node-id="109:585" data-name="icon_chapter_back_light">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-4.78px)] size-[27.333px] top-[calc(50%+0.68px)]">
            <div className="-rotate-135 -scale-y-100 flex-none">
              <div className="relative size-[19.328px]" data-node-id="109:587" data-name="Vector">
                <div className="absolute inset-[-7.95%]">
                  <img alt="" className="block max-w-none size-full" src={"/reelsaga/52069d8b-2023-45d1-897b-e09e5be852ce.svg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="contents relative size-full" data-node-id="109:601">
      <div className="absolute bg-[var(--color,#111c3a)] h-[409px] left-[calc(8.33%+6px)] rounded-[30px] top-[1384px] w-[1248px]" data-node-id="109:602" />
      <div className="absolute bg-[#fec200] content-stretch flex gap-[8.384px] h-[42.793px] items-center justify-center left-[calc(50%+27px)] px-[25.151px] rounded-[91.074px] top-[1694px] w-[200.012px]" data-node-id="109:603" data-name="PlayBTN">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#050e27] text-[17.675px] text-center whitespace-nowrap" data-node-id="109:605" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Watch now</p>
        </div>
        <div className="h-[17.954px] relative shrink-0 w-[20.931px]" data-node-id="109:606" data-name="Vector">
          <div className="absolute inset-[-5.18%_-4.44%]">
            <img alt="" className="block max-w-none size-full" src={"/reelsaga/2bdeccf7-a0e9-4de6-a933-5ad18933578d.svg"} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(50%+25px)] top-[1459px]" data-node-id="109:607" data-name="Hunter Info">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal h-[124px] leading-[normal] left-[calc(50%+25px)] text-[18px] text-white top-[1540px] tracking-[1.2069px] w-[535px]" data-node-id="109:608" style={{ fontVariationSettings: '"wdth" 100' }}>
          A forensic cleaner searching for his missing sister and a detective hunting her father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals an impossible link between their tragedies, they uncover a deadly secret that turns them from hunters into the hunted.
        </p>
        <div className="absolute h-[46px] left-[calc(50%+25px)] top-[1459px] w-[468px]" data-node-id="109:609" data-name="Headlines">
          <p className="[word-break:break-word] absolute font-['Roboto:Medium'] font-medium leading-[normal] left-0 text-[32px] text-white top-0 whitespace-nowrap" data-node-id="109:610" style={{ fontVariationSettings: '"wdth" 100' }}>
            The Suburban Strangler
          </p>
        </div>
        <div className="absolute contents left-[calc(50%+27px)] top-[1508px]" data-node-id="109:611">
          <p className="[word-break:break-word] absolute font-['Roboto:Medium'] font-medium leading-[normal] left-[calc(50%+27px)] text-[16px] text-[rgba(255,255,255,0.4)] top-[1508px] whitespace-nowrap" data-node-id="109:612" style={{ fontVariationSettings: '"wdth" 100' }}>
            Complete
          </p>
        </div>
      </div>
      <div className="absolute contents left-[calc(8.33%+25px)] top-[1403px]" data-node-id="109:613" data-name="suburban">
        <div className="absolute aspect-[1536/1024] left-[9.99%] right-[53.24%] rounded-[24.497px] top-[1403px]" data-node-id="109:614" data-name="Anime NAN Shorts Cover (3) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24.497px] size-full" src={"/reelsaga/e77c776a-0a0a-4a31-af71-4ae0f0be148a.webp"} />
        </div>
        <div className="absolute h-[132.068px] left-[calc(16.67%-15.79px)] top-[1649.03px] w-[385.198px]" data-node-id="109:615" data-name="Anime NAN-Shorts Logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/458e767e-67de-4f76-b1ea-5f7b50eb5cbf.webp"} />
        </div>
      </div>
    </div>
      <div className="contents relative size-full" data-node-id="109:596">
      <div className="[word-break:break-word] absolute font-['Roboto:Bold'] font-bold leading-[0] left-[calc(8.33%+6px)] text-[0px] text-white top-[1987px] whitespace-nowrap" data-node-id="109:597" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 text-[28px]">4.9* from people</p>
        <p className="text-[28px]">
          <span className="leading-[normal]">{`who `}</span>
          <span className="[word-break:break-word] font-['Roboto:Italic'] font-normal italic leading-[normal] text-[#fec200]" style={{ fontVariationSettings: '"wdth" 100' }}>
            couldn’t put it down.
          </span>
          <span className="leading-[normal]">
            <br aria-hidden />
            <br aria-hidden />
          </span>
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular'] font-normal h-[135px] leading-[1.5] left-[calc(58.33%+498px)] text-[15px] text-right text-white top-[1987px] w-[380px]" data-node-id="109:598" style={{ fontVariationSettings: '"wdth" 100' }}>
        ReelSaga is the home of serialized vertical fiction. New chapters drop daily - crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.
      </p>
      <div className="-translate-x-1/2 absolute h-[2px] left-1/2 opacity-40 top-[1869px] w-[1396px]" data-node-id="109:599" data-name="Separator">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/82e1fe98-d1c8-4987-b9d8-0d7ed56e21cb.webp"} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:SemiBold'] font-semibold h-[102px] justify-center leading-[0] left-[calc(41.67%-499px)] text-[#fec200] text-[38px] top-[1930px] tracking-[1.2069px] w-[994px]" data-node-id="109:600" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[123.709px]">Must watch</p>
      </div>
    </div>
      <div className="contents relative size-full" data-node-id="109:616">
      <div className="absolute contents left-[calc(8.33%-16px)] top-[2086px]" data-node-id="109:617" data-name="Mask group">
        <div className="absolute contents left-[calc(8.33%+7px)] top-[2109px]" data-node-id="109:619">
          <div className="absolute contents left-[calc(8.33%+7px)] top-[2109px]" data-node-id="109:620">
            <div className="absolute contents left-[calc(33.33%+71px)] top-[2109px]" data-node-id="109:621">
              <div className="absolute h-[253.785px] left-[calc(33.33%+72.48px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-466.477px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:622" style={{ maskImage: `url("${"/reelsaga/e79e2019-451b-4d24-835f-9ed1e89a6210.svg"}")` }} data-name="Licensed IPs Cover Tile 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/153ce66e-5732-476a-bb99-e962c8d7e54f.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(33.33%+71px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-465px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:623" style={{ maskImage: `url("${"/reelsaga/e79e2019-451b-4d24-835f-9ed1e89a6210.svg"}")` }} data-name="NAN Shorts Logo (15) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b3436fc0-75e5-46af-b5c5-9f6ba5f80950.webp"} />
              </div>
            </div>
            <div className="absolute contents left-[calc(75%+104px)] top-[2109px]" data-node-id="109:624">
              <div className="absolute h-[253.785px] left-[calc(75%+105.48px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1129.477px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:625" style={{ maskImage: `url("${"/reelsaga/e79e2019-451b-4d24-835f-9ed1e89a6210.svg"}")` }} data-name="Licensed IPs Cover Tile 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/153ce66e-5732-476a-bb99-e962c8d7e54f.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(75%+104px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1128px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:626" style={{ maskImage: `url("${"/reelsaga/e79e2019-451b-4d24-835f-9ed1e89a6210.svg"}")` }} data-name="NAN Shorts Logo (15) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/b3436fc0-75e5-46af-b5c5-9f6ba5f80950.webp"} />
              </div>
            </div>
            <div className="absolute contents left-[calc(50%+40px)] top-[2109px]" data-node-id="109:627">
              <div className="absolute h-[253.785px] left-[calc(50%+41.47px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-687.473px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:628" style={{ maskImage: `url("${"/reelsaga/8a609c00-ddf6-4dc5-86ff-c8360056dfaf.webp"}")` }} data-name="Covers Licensed IPs Tile 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/8a609c00-ddf6-4dc5-86ff-c8360056dfaf.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(50%+40px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:629" style={{ maskImage: `url("${"/reelsaga/8a609c00-ddf6-4dc5-86ff-c8360056dfaf.webp"}")` }} data-name="NAN Shorts Logo (16) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/f46bc13a-948a-4863-88cd-cf84717fb286.webp"} />
              </div>
            </div>
            <div className="absolute contents left-[calc(66.67%+9px)] top-[2109px]" data-node-id="109:630">
              <div className="absolute h-[253.785px] left-[calc(66.67%+10.48px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-908.477px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:631" style={{ maskImage: `url("${"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"}")` }} data-name="Covers Licensed IPs Tile (2) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(66.67%+9px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-907px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:632" style={{ maskImage: `url("${"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"}")` }} data-name="NAN Shorts Logo (18) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/421b379e-1e81-4298-b9f2-fab10cfab679.webp"} />
              </div>
            </div>
            <div className="absolute contents left-[calc(16.67%+102px)] top-[2109px]" data-node-id="109:633">
              <div className="absolute h-[253.785px] left-[calc(16.67%+103.48px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-245.477px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:634" style={{ maskImage: `url("${"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"}")` }} data-name="Covers Licensed IPs Tile (2) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(16.67%+102px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-244px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:635" style={{ maskImage: `url("${"/reelsaga/d4ade1af-a64d-4a24-bc84-b7a62b752565.webp"}")` }} data-name="NAN Shorts Logo (18) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/421b379e-1e81-4298-b9f2-fab10cfab679.webp"} />
              </div>
            </div>
            <div className="absolute contents left-[calc(8.33%+7px)] top-[2109px]" data-node-id="109:636">
              <div className="absolute h-[253.785px] left-[calc(8.33%+8.48px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-24.477px_-23px] mask-size-[1270px_300px] top-[2109px] w-[203.582px]" data-node-id="109:637" style={{ maskImage: `url("${"/reelsaga/f9cceb94-a89a-4dfc-94e5-9b0e37bb01fd.webp"}")` }} data-name="Covers Licensed IPs Tile (1) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/f9cceb94-a89a-4dfc-94e5-9b0e37bb01fd.webp"} />
              </div>
              <div className="absolute h-[70.824px] left-[calc(8.33%+7px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-205.961px] mask-size-[1270px_300px] top-[2291.96px] w-[206.569px]" data-node-id="109:638" style={{ maskImage: `url("${"/reelsaga/f9cceb94-a89a-4dfc-94e5-9b0e37bb01fd.webp"}")` }} data-name="NAN Shorts Logo (17) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/2e785339-4d07-41b0-aa27-9a1a69af9558.webp"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[calc(83.33%+56px)] top-[2100px]" data-node-id="109:639">
        <div className="absolute h-[277px] left-[calc(83.33%+56px)] top-[2100px] w-[65px]" data-node-id="109:640">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/0861faf5-4af4-400c-b8db-9d9411438c89.webp"} />
        </div>
        <div className="absolute left-[calc(83.33%+86px)] size-[82px] top-[2189px]" data-node-id="109:641" data-name="icon_close_light">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[51.933px] top-1/2" data-node-id="109:642" data-name="">
            <div className="absolute inset-[-2.96%]">
              <img alt="" className="block max-w-none size-full" src={"/reelsaga/9cb19970-a5b0-4a92-aa4a-1f02804dfa9b.svg"} />
            </div>
          </div>
          <div className="absolute left-0 size-[82px] top-0" data-node-id="109:644" data-name="icon_chapter_back_light">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-4.78px)] size-[27.333px] top-[calc(50%+0.68px)]">
              <div className="-rotate-135 -scale-y-100 flex-none">
                <div className="relative size-[19.328px]" data-node-id="109:646" data-name="Vector">
                  <div className="absolute inset-[-7.95%]">
                    <img alt="" className="block max-w-none size-full" src={"/reelsaga/2d85174b-5404-4337-8476-55ac8aa789ef.svg"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="contents relative size-full" data-node-id="109:588">
      <div className="[word-break:break-word] absolute font-['Roboto:Bold'] font-bold leading-[0] left-[calc(8.33%+6px)] text-[0px] text-white top-[2557px] whitespace-nowrap" data-node-id="109:589" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 text-[28px]">4.9* from people</p>
        <p className="text-[28px]">
          <span className="leading-[normal]">{`who `}</span>
          <span className="[word-break:break-word] font-['Roboto:Italic'] font-normal italic leading-[normal] text-[#fec200]" style={{ fontVariationSettings: '"wdth" 100' }}>
            couldn’t put it down.
          </span>
          <span className="leading-[normal]">
            <br aria-hidden />
            <br aria-hidden />
          </span>
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular'] font-normal h-[135px] leading-[1.5] left-[calc(58.33%+498px)] text-[15px] text-right text-white top-[2557px] w-[380px]" data-node-id="109:590" style={{ fontVariationSettings: '"wdth" 100' }}>
        ReelSaga is the home of serialized vertical fiction. New chapters drop daily - crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.
      </p>
      <div className="-translate-x-1/2 absolute h-[2px] left-1/2 opacity-40 top-[2439px] w-[1396px]" data-node-id="109:591" data-name="Separator">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/cc040b29-ebe3-4ff0-a200-ceeb41dbeddc.webp"} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:SemiBold'] font-semibold h-[102px] justify-center leading-[0] left-[calc(41.67%-499px)] text-[#fec200] text-[38px] top-[2500px] tracking-[1.2069px] w-[994px]" data-node-id="109:592" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[123.709px]">Reviews</p>
      </div>
      <div className="absolute contents left-[calc(8.33%+6px)] top-[2686px]" data-node-id="109:593" data-name="Mask group">
        <div className="absolute h-[1298.719px] left-[-201.06px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[333.059px_863.016px] mask-size-[1242.161px_376px] top-[1822.98px] w-[1909.326px]" data-node-id="109:595" style={{ maskImage: `url("${"/reelsaga/5233ca9c-5e56-4be8-b8f9-06008cf994c1.svg"}")` }} data-name="Screenshot 2026-05-28 at 10.19.44 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={"/reelsaga/e65d90e0-a637-4b52-a113-1c8d9cd9edfe.webp"} />
        </div>
      </div>
    </div>
      <div style={{position:"absolute",left:461,top:3227,width:590,height:150,cursor:"default"}}><p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative size-full text-[0px] text-center text-white whitespace-pre" data-node-id="109:647" style={{ fontVariationSettings: '"wdth" 100' }}>
      <span className="leading-[normal] text-[64px]">{`Your next  `}</span>
      <span className="font-['Roboto:Italic'] font-normal italic leading-[normal] text-[#fec200] text-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        obsession
      </span>
      <span className="leading-[normal] text-[64px]">
        <br aria-hidden />
        is six minutes long.
      </span>
    </p></div>
      {/* hero lede */}
      <p style={{position:"absolute",left:133,top:368,width:380,margin:0,fontSize:16,lineHeight:1.6,color:"rgba(235,235,245,0.85)"}}>ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.</p>
      {/* carousel dots */}
      <div style={{position:"absolute",left:146,top:595,display:"flex",gap:6,alignItems:"center"}}>
        <span style={{width:22,height:8,borderRadius:9,background:"#fec200"}} />
        <span style={{width:8,height:8,borderRadius:9,background:"rgba(235,235,245,0.35)"}} />
        <span style={{width:8,height:8,borderRadius:9,background:"rgba(235,235,245,0.35)"}} />
      </div>
      {/* hero carousel arrows */}
      <button aria-label="Previous" style={{position:"absolute",left:54,top:354,width:61,height:61,borderRadius:99,border:"1px solid rgba(235,235,245,0.25)",background:"rgba(3,22,42,0.55)",color:"#fff",fontSize:24,cursor:"pointer"}}>‹</button>
      <button aria-label="Next" style={{position:"absolute",left:1382,top:354,width:61,height:61,borderRadius:99,border:"1px solid rgba(235,235,245,0.25)",background:"rgba(3,22,42,0.55)",color:"#fff",fontSize:24,cursor:"pointer"}}>›</button>
      {/* watch now clickable overlay */}
      <div onClick={()=>go("2")} style={{position:"absolute",left:783,top:1694,width:200,height:43,cursor:"pointer"}} />
      {/* footer separator + links */}
      <div style={{position:"absolute",left:58,top:3521,width:1396,height:1,background:"rgba(235,235,245,0.14)"}} />
      <p style={{position:"absolute",left:132,top:3557,margin:0,fontSize:16,color:"rgba(235,235,245,0.6)"}}>© 2026 Reel saga</p>
      <p style={{position:"absolute",left:1162,top:3557,margin:0,fontSize:16,color:"rgba(235,235,245,0.6)"}}>Privacy Policy</p>
      <p style={{position:"absolute",left:1326,top:3557,margin:0,fontSize:16,color:"rgba(235,235,245,0.6)"}}>Terms</p>

      </div>
    </div>
  );
}

export default HomePage;
