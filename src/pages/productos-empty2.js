import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import Editar from "../components/editar";
import PortalPopup from "../components/portal-popup";
import Crear from "../components/crear";
import { useRouter } from "next/router";
import styles from "./productos-empty2.module.css";

const ProductosEmpty2 = () => {
  const [isEditarOpen, setEditarOpen] = useState(false);
  const [isEditar1Open, setEditar1Open] = useState(false);
  const [isCrearOpen, setCrearOpen] = useState(false);
  const router = useRouter();

  const openEditar = useCallback(() => {
    setEditarOpen(true);
  }, []);

  const closeEditar = useCallback(() => {
    setEditarOpen(false);
  }, []);

  const openEditar1 = useCallback(() => {
    setEditar1Open(true);
  }, []);

  const closeEditar1 = useCallback(() => {
    setEditar1Open(false);
  }, []);

  const openCrear = useCallback(() => {
    setCrearOpen(true);
  }, []);

  const closeCrear = useCallback(() => {
    setCrearOpen(false);
  }, []);

  const onSegment3ContainerClick = useCallback(() => {
    router.push("/perfil1");
  }, [router]);

  return (
    <>
      <div className={styles.productosEmpty2}>
        <div className={styles.productosEmpty2Child} />
        <div className={styles.productosEmpty2Item} />
        <div className={styles.listItemlistItem2DensitParent}>
          <div className={styles.listItemlistItem2Densit}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer}>
              <div className={styles.leadingElement}>
                <div className={styles.buildingBlocksimageThumbnai}>
                  <img
                    className={styles.thumbnailIcon}
                    alt=""
                    src="/thumbnail@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline}>Pan francés</div>
                <div className={styles.supportingText}>Supporting text</div>
              </div>
              <div className={styles.trailingElement} onClick={openEditar}>
                <div className={styles.metadata}>100+</div>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div className={styles.listItemlistItem2Densit1}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer1}>
              <div className={styles.content}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline}>A 20 centavos la pieza</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum
                </div>
              </div>
              <div className={styles.trailingElement1}>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div className={styles.listItemlistItem2Densit2}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer1}>
              <div className={styles.content}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline}>XX/XX/XXXX</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum
                </div>
              </div>
              <div className={styles.trailingElement1}>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div className={styles.listItemlistItem2Densit3}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer1}>
              <div className={styles.content}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline}>XX/XX/XXXX</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum
                </div>
              </div>
              <div className={styles.trailingElement1}>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div className={styles.listItemlistItem2Densit4}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer1}>
              <div className={styles.leadingElement1} onClick={openEditar1}>
                <img className={styles.editIcon} alt="" src="/edit3.svg" />
              </div>
              <div className={styles.content4}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline}>{` `}</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum
                </div>
              </div>
              <div className={styles.trailingElement4}>
                <div className={styles.metadata}>100+</div>
                <img
                  className={styles.editIcon}
                  alt=""
                  src="/delete-outline.svg"
                />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit5}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer1}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Producto</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.buildingBlocksimageThumbnai}>
              <img
                className={styles.iconsarrowRight24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit6}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer1}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Descripción</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.buildingBlocksimageThumbnai}>
              <img
                className={styles.iconsarrowRight24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit7}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer1}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Publicado en</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.buildingBlocksimageThumbnai}>
              <img
                className={styles.iconsarrowRight24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit8}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer1}>
            <div className={styles.content}>
              <div className={styles.overline}>Overline</div>
              <div className={styles.headline}>Vence en</div>
              <div className={styles.supportingText}>
                Supporting line text lorem ipsum
              </div>
            </div>
            <div className={styles.buildingBlocksimageThumbnai}>
              <img
                className={styles.iconsarrowRight24px}
                alt=""
                src="/iconsarrow-right-24px2.svg"
              />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.listItemlistItem2Densit9}>
          <div className={styles.buildingBlocksstateLayer1} />
          <div className={styles.stateLayer}>
            <div className={styles.content}>
              <div className={styles.overline9}>Overline</div>
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
        <Button
          className={styles.button}
          variant="contained"
          color="success"
          onClick={openCrear}
        >
          Crear Hot Deal
        </Button>
        <div className={styles.navigationRail}>
          <div className={styles.menuFab}>
            <div className={styles.menu}>
              <div className={styles.container}>
                <div className={styles.stateLayer10}>
                  <img
                    className={styles.iconsarrowRight24px}
                    alt=""
                    src="/iconsmenu-24px.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fabElevationOverride}>
              <div className={styles.fab}>
                <div className={styles.stateLayer11}>
                  <img
                    className={styles.iconsarrowRight24px}
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
                <div className={styles.stateLayer12}>
                  <img className={styles.editIcon} alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2}>
              <div className={styles.iconContainer1}>
                <div className={styles.stateLayer12}>
                  <img className={styles.editIcon} alt="" src="/icon13.svg" />
                </div>
              </div>
              <div className={styles.label}>Hot Deals</div>
            </div>
            <div className={styles.segment3} onClick={onSegment3ContainerClick}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer12}>
                  <img className={styles.editIcon} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img className={styles.editIcon} alt="" src="/icon14.svg" />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img
                    className={styles.iconsarrowRight24px}
                    alt=""
                    src="/icon6.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img
                    className={styles.iconsarrowRight24px}
                    alt=""
                    src="/icon7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img
                    className={styles.iconsarrowRight24px}
                    alt=""
                    src="/icon8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditar}
        >
          <Editar onClose={closeEditar} />
        </PortalPopup>
      )}
      {isEditar1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditar1}
        >
          <Editar onClose={closeEditar1} />
        </PortalPopup>
      )}
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

export default ProductosEmpty2;
