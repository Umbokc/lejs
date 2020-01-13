import React, {useRef, useContext, useEffect} from "react"
import "./styles/WindowObj.css"
import dom from "../scripts/$dom"
import { ShieldContext } from '../context/shield/shieldContext'

export const WindowObj = (props) => {

	const def_params = {
		id: dom.random(1, 99999999),
		can_move: true,
		can_resize: true,
		can_move_by_body: false,
		styles: {},
		boot: e => {}
	}

	const panelRef = useRef();

	const params = dom.check_list(props.params, def_params)

	const panelClass = ".panel-lejs";
	const curr_id = "cmp-window-" + params.id;

	const shield = useContext(ShieldContext)

	function boot() {
		const panel = panelRef.current;

		let panel_move = dom.get(".panel-move", panel);
		let panel_body = dom.get(".panel-body", panel);

		dom.remClass(panelClass, "active");
		if (params.styles) dom.css(panel, params.styles);

		function set_show_shield(new_val) {
			if(new_val) shield.show()
				else shield.hide()
			}

		if (params.can_resize) {
			dom.resizable(
				panel,
				() => set_show_shield(true),
				() => set_show_shield(false)
				);
		} else {
			dom.remClass(panel, "resizable");
		}

		if (params.can_move)
			dom.move_div_by(
				panel_move,
				panel,
				() => set_show_shield(true),
				() => set_show_shield(false)
				);
		if (params.can_move_by_body)
			dom.move_div_by(
				panel_body,
				panel,
				() => set_show_shield(true),
				() => set_show_shield(false)
				);

		dom.event(panel, "mousedown", e => {
			let elem = e.target;
			if (!dom.hasClass(elem, panelClass.replace(".", "")))
				elem = elem.closest(panelClass);

			if (dom.hasClass(elem, "active")) return;

			dom.remClass(panelClass, "active");
			dom.addClass(elem, "active");
		});

		params.boot(panel)
	}


	useEffect(() => {
		boot();
	}, []);

	return (
		<div
			ref={panelRef}
			className={`${panelClass.replace(".", "")} resizable active`}
			id={curr_id}
		>
			<div className="panel-move"></div>
			<div className="panel-body">{props.children}</div>

			<div className="resizer top-left"></div>
			<div className="resizer top-right"></div>
			<div className="resizer bottom-left"></div>
			<div className="resizer bottom-right"></div>
		</div>
	);
}

