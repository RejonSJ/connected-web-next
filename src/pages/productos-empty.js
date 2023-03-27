import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Crear from "../components/crear";
import PortalPopup from "../components/portal-popup";
import styles from "./productos-empty.module.css";

const ProductosEmpty = () => {
  const router = useRouter();
  const [isCrearOpen, setCrearOpen] = useState(false);

  const onSegment3ContainerClick = useCallback(() => {
    router.push("/perfil1");
  }, [router]);

  const onAddToPhotosClick = useCallback(() => {
    router.push("/productos-empty2");
  }, [router]);

  const openCrear = useCallback(() => {
    setCrearOpen(true);
  }, []);

  const closeCrear = useCallback(() => {
    setCrearOpen(false);
  }, []);

  return (
    <>
      <div className={styles.productosEmpty}>
        <div className={styles.productosEmptyChild} />
        <div className={styles.navigationRail}>
          <div className={styles.menuFab}>
            <div className={styles.menu}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/iconsmenu-24px.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fabElevationOverride}>
              <div className={styles.fab}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinations}>
            <div className={styles.segment1}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2}>
              <div className={styles.iconContainer1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon15.svg" />
                </div>
              </div>
              <div className={styles.label}>Hot Deals</div>
            </div>
            <div className={styles.segment3} onClick={onSegment3ContainerClick}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img className={styles.icon1} alt="" src="/icon5.svg" />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon6.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productosEmptyChild} />
        <div className={styles.productosEmptyInner} />
        <div className={styles.listItemlistItem2Densit}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer9}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Producto</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.trailingElement}>
              <img
                className={styles.iconsmenu24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit1}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer9}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Descripción</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.trailingElement}>
              <img
                className={styles.iconsmenu24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit2}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer9}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Publicado en</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.trailingElement}>
              <img
                className={styles.iconsmenu24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit3}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer9}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Vence en</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.trailingElement}>
              <img
                className={styles.iconsmenu24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit4}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer13}>
            <div className={styles.content}>
              <div className={styles.overline4}>Overline</div>
              <div className={styles.headline}>{` `}</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.trailingSupportingText}>100+</div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <img
          className={styles.addToPhotosIcon}
          alt=""
          src="/add-to-photos.svg"
          onClick={onAddToPhotosClick}
        />
        <div className={styles.noHayNingn}>
          No hay ningún producto registrado.
        </div>
        <Button
          className={styles.button}
          variant="contained"
          color="success"
          onClick={openCrear}
        >
          Crear Hot Deal
        </Button>
      </div>
      {isCrearOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCrear}
        >
          <Crear onClose={closeCrear} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductosEmpty;
