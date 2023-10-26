import { Box, IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { IActionDetailView } from "../../interfaces";
import Carrousel from "../../components/carrousel";
import { data } from "../../data";
import TenderAction from "../../components/tenderAction";
import SupportAction from "../../components/supportAction";
import ActionDetailDescription from "../../components/actionDetailDescription";

const MobileView: React.FC<IActionDetailView> = (props) => {
  return (
    <Box style={{ padding: 16 }}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          style={{ paddingLeft: 0 }}
          onClick={() => props.navigateTo(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box
          style={{
            fontSize: 18,
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.currentAction?.title}
        </Box>
      </Box>
      <Box style={{ marginTop: 4 }}>
        <TenderAction
          avatarURL=""
          onClick={() => alert("Aqui licitamos")}
          username="Gleiber Granado"
        />
      </Box>
      <Box style={{ marginTop: 8 }}>
        <Carrousel data={data.dataForCarrousel} />
      </Box>

      <Box style={{ wordBreak: "break-word", fontSize: 12 }}>
        <ActionDetailDescription description="Necesitamos poder recoletar fondos para acomodar la calle principal de Chacao, la cual lleva en este estado de deterioro desde varios meses." />
      </Box>
      <SupportAction
        onDonate={() => alert("Aqui donamos")}
        onShared={() => alert("Aqui compartimos")}
      />

      <Box
        style={{
          marginTop: 12,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        Contribuidores
      </Box>
      <Box style={{ marginTop: 8 }}>
        {[
          {
            id: 0,
            name: "Ricardo Capuz",
            avatar:
              "https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png",
          },
          {
            id: 1,
            name: "Tony Stark",
            avatar:
              "https://www.clipartmax.com/png/middle/90-901643_our-team-avatar-super-hero.png",
          },
          {
            id: 2,
            name: "Pancho Villa",
            avatar:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAACAVBMVEX////+/v7t7e3s7OxgOCLrICa9ICz4wJwjHyD39/dJKBn6+vr9/f309PTv7+/y8vIAAAAoJCT3nnbwYCj72R7CICtIJxiGGB8mqeD3oXn4vJi7FCP3nXYfHB74uJPSb3TsKS87DQAZGBukHiNaLxRWJwBZLRBAGADrFx66ABlYMBlEIA7qFR+CCBeNGSAgJCTrAAvrWSi2qKGdh3zSzctmQCyFbmJVMR7DurZCGwCzhmwRExhDKB07HQ8VDhAzLS12RzJRTk97V0bLhWLPoYW5bl3son+8fWHEOEG5AAwOHyCgQR7uTyjZViWCNhr/4B5YIhLcRyqpmI9wTj2QfHK/tK5XKQDQysheQjZ2XVM3AgBkST6AVz+7jXCRZ1DMlXXInYKXd2RcQziNb12tiHI1JiHhsZJsV0+ia1BHNi59fX4iVm4jQVEjDQAuLzJicntmZWZTSUWW0ew7f59CteXY8f2n2vGamJnG5/ZpwuljYmOoqKns3NbWk3HsyLmNYU/0inTyeWDtRUGaSz/3y7GuSj6fDhvrxsjdlJgqCwfrXGH1s7TJUllvHR/zj5FYJx/paWxhJB9DIiPZeCTnnCP2wx785Ga5Tibz1NX96ov+99pVRRP73kW0mxehixPyeiZyWRMwJwbSsxqojhZXTAifgCYeABY+NwbzhSXmSE3upqfT4omxAAAYn0lEQVR4nO2d/V8TV7rA5wVMhklmEpB0gwQxviQQKhADSUwJVii0WktFuIBaxRcU6NrV3t6ltrF7122FitLW1krttut2d++9+lfec868ZF7OmZnMJCTcz336g+nMkJxvnnOe5znPPPOEooFQIgMkSIGXARa8YgPwYBAeFOFBCh3kwUuKgwcFysl5AR7k4MGAIAKhoAREURBEw3ke/j1DqSPhyiOh1UuZ8qVs+fPRoGncoNEbUCoea8JjDcOHrzi2jGdzHo2JB0g8O5dLp48hSadzcxkWkUp48PMNeNqR0LTum6A1eDaDrj2eILJsaXp4YejQ4SNHDiE5cuTwkaZzwzPpjMgCPe5iPFHMpIebDh851NtklN5DRw43DU/nGDFA1RYPCfiWWXAlXBvwFRuAL4PwlbRi0EE4z8DwgQiUg/NiegGgmcg0jECRwzkGzV4o0ow1jIQuH+Uo/aXlQdOGQUvjg29AwUUvcjwQDr4Kwld8UH9QLB+UzovE85z0Mpg51nTErDWTHDoyNJxjedybaj5Jen/jUYvPF5VLKaZs9IAyWXnZsDqjJk8GVp4MlDQZyOepzEzTEXs2mfDwyVmK0ptfzUjQ+OAURvOONVlq8qDhURkPY/Rs53rZKujOUxRz7LDVpDTP0sPHKMW6Y82vyRaog6bJg2ZqgxdID1UEB+XfMnCBCUIN8HBWw2YpS6sed57hS8OHK4UD+luYRv5QFAO4kTgzdcZBo6NBKByS8kvsQY54UP0jjks3Vaw6xJdIHDifnZ9JsxxvHomz8RkPwtfVdQzCjAvVIYm0gP9SqURqeE4QvDoGsewYqujWqcw5x/YShwckAhCHM3wDRi0MlavcpiiSlfEgYT6bho6imngs4Uqsn9Hglc8LQtrtxNTjtbSkDswAFHs860FLeAEoQWCUhSB8xcNXAq8/GCgf5NBL2nxenPZA1xTR4rVEEsNBShoJevuACF9y5fEFiONDB0VaudSZjXXgGKZdLzuE16LFa2lJLMj2gcGGk4ZBM2THUB237pGuRa89uAAX2IaJWhjKy7qTlKfHA/NzBgWijYAneqRrwcn5dDXwqrD2xNlDnuiyWLxIKlOFtYc1QoaDtKXlpDKe4AjKA/7hAlu55eQMltOz36OYcw72rVbKixD4EseCnv2e56iFGz5UG7qWyPmMUOegLEh5cudNTUMXI0S+1DDjFc/jjoGb86a73g98l4dGCNprOZCjPO4Y3O+n4Aue9bbwei/5fL6OSyMEBaYWvO73PO7WZzxFK00nOnxQjqfwfJF8TnQ8m6oflFE5bwuv6bJPkssteL7Ugli/qIUSPU7N4z5FLuMNaCSVE6uAZ5My1PsZNc9JHfM0NdHCU/nw8zM1LHjKc3rIUtPewpXeiz6tXE7g+CL5UrDiLDVXzlJ7cAzCwiEveEM3dHi+S1j/kJiu3DFo7jG4d+vcrDeredlnkHMp3Oy8wFH1iVo82ZVeE53vBta8nM/UB2/Wi1MA0YpZPsCZl/wxL3iu1x634EF5GpeglYsYvNS84CEocxQAYN5O9KI8nUvQTk+M9YwkcsKOp5IE5qR75ZHogPXEWJfEjLjjUYuYc282ey92kPC6MNYlMr/zQZmHTWzvCSId1vmBwIxyjedm7QE81j0dWXdw9WGMJ/LsLtceNt6yKRUI8rTruWmpOx/WeKZuCoaqAPKgNZEbjyqhcNGybQjrOivde+KGJZ3vMm52lgSrEF8pujIM2oNbDwy7s5u2dD6f2bhE8rPizkYtnDvlOaDDGZf8Mdd47qIWxpVPt7Yqyuw0u77UTWDL3EUtrkoF+IwbPEd0vg5zXiKSZblK6hvKL92lkgQ3EZkzOqzthLuGHUwlienK1x45EjPIcfPiS6SpnYxaXOD1Ljukw2VdEjPe8CgCHt7PuMAj7IBwgtnVphYonUuzHrQWz3hvy8kNJ75iPOzulSRDZrwLQVq+t4UtZcAOGl7q0jHMVWhazJkHCzHblsh8RtjJVFKpErxeY07MRsybvkgLwtu5qOX9Cugu2tAtXrly5brmGrPpjORzO4s35JzOxmReDxeQXL2uHBnH4Yk7GZTRjnezNkZlcaUQ8yOJF1YWpWOYPd+BnMu1hzNCUqmAxgiZiqyCDjdEvScsjUrHtVjcr0q8sICmKMYzHMhRGsuJL2XAWk5Xfo91mGrpvWQdhy0oqpOlsDJOwJuj3Pk9d7kWwVEyonfe0qjcWCn4DRIvgBXYYXZ8Ct6OpZIcJHFb/PHwdTLdYjhupPP7Y4Ur1cVzlUpi7eOW7BIa7QWSAo/7Y2Y6xHeDhEcydRapJEdbJ/NBvmTjGt6ISaMvxPAKHC5g6eBfXDOFLZH8HFdx6Tra71G0K8dAUZauIRuOldUxumhedldNy06zAN8w+b3UXCWOQURQnu7vWVYNvKGbeLHCHQPg9VHMsiuLGS+7s0EZPE2+yfCGcd7FCzc13n38JnFiEvBg9ZzLqEXn0pzmOeFBUhGnZmJqAZeuobhy/PqdgqXqsHg3RZd5TuyzYbZZaigCaWLiJQaowuFwzBYO4I2MjOgqzVIzvH0pAzZL7Sgrgw9Msb5hyWrexWLWs1K6KLw8NrZ8QsuXSFuaupqUivNBjG+Q6GLxYtGeQ5ZisahTaGylFcqyhu98ZkdTSax03lwaAehixVBo9LPV1Q8//H3/raLVTIwVb9366Pcf/mH19p14qFhUFBs/B+A6AZ+6L4pk2Xrg8cbCFmAyY3dWcwwXoD7+HZQ/vBkiTsfi6Oq/w2s+4Wmey6zdXpKPF5aR9lrvqZF1aph2i+d+7YHzGb36smDMq+gKivsE4d3lMqP4aRr3r7L/ga753R+lTWdGwZuU8DrV2AwtPXdrDxsA0HZRi3xe0Nc7wqk5Kn0X8sg/4ajAKk6BxVEQRX4qXfSxNIhV+Xvo75QmZ+sJGS+SyAiWX3etHnAT2KFe3dQEWllB32XgrqQ9+Dq3ZKZbFcvfgaS9tZC8Iq9GDXiphXrVUuseYQhLI38TfbmfysqDun/TpL4imm7SAr2LvvY1ZQ7HT7bKouAl0sE64THBcs1jVoYorsyh6Xn37sdwPrNrH2HMZ+izDDz56d27f4QrgV1VV2gcWRagvai89iItrOgaD++xHa498EflilU10oyFVjPKqs6s3SpibWcx9GY6KF8kfK6xP/ExGW9Mtpz5mep1HcCXRpKDNF4YN+HBsS/dXsvl1j67FdLB6UDjxdDo6ue5z1dXdBfFOuW5OTYib4Yywfp1HRBuTMp857RzMFYE3r0Y1/HEClcN0TYMAfRfALAsUHWdgFHe1KYW6tl1gCl1XpL4LtnEyvHwcvS4xS5WkoJqWaS5CTbqYj0fcGO7Oi8ivnvWe9TC1YnWaMd1m62e4tQ7W8ekmDM/I9S164DwBTDhCG8cl/rSaqUz2uGz4YtBy9JZdgtg5Ql17jow0ToG9g7ZsY5x3EZWHvWfWiU833W/xZcQi1+X6SZHpIAlzde768AXYCbBWyVdvvE4ni8WRlMO4fkWl4gLMB5b7JIMZ6e08lIXeAezqaZdB6g5MHbAd3HC58PPz3j/WGsZj5wmgzn4rk7Ed1FSXqTk3BbUqOsANZcHo5/M9k7gE+uxws0bUTTlZDxfBzbJGUN3UKIIb1memtPS+OrZdQDgZRHfJBz8jQsFw6BHj/t8E50a7cEJOmq+veBH1QVReOWkZDUTxyyf37MetPuuA6L+2dm5fKQF8C3LpYzXNMmiWCF25YYyaA2e78ZCXJ+BKFwdR4oFV3YuSw+8JW6KLrsOBKrYdUCYzYN5dHEsOibfy7ssp/pi8UL4mnSLwYQHrlooqFM0XliRU/VdrfcmhyTdpebZRug6IKYTKK5vGlJvMx+/GisUCqMX1DvmxskpafDaSqEQj8cL8TvqfYhL2aycQkrNA7PSAI/lCzN5eVc9pI68Y3xxcVxzb2iiFYMHLlu8snBz4cp4+ciQkh9LZaHRbAS8BaVQI0u8Wwm0p7GcPvI9WyV9lOrNqCOpa9cBhlXLUCLEG+ldKBSR8bomukjXjcvVjon5jLQZrHvXAWo2r+bKyVUQXar2uqKtZOV9kJL83TCr7ddC70jXAYxbB+cDw2XtWdQ0Qj6A1xU1LUCtXBlBdDPBanXb8Ry1zB1Qc+Ua24Ll64yCmCRKnJk+VC0XSaVmq90ryTUex17QVIClrCohkP46oxZXwIKdVGKhmp2uvOwYwBtlbmrr21KWVZtIf5aFLsdTifk0W80+ZV66DgSEdFZXvRc5YTV4wGdhVYB0NOWnWdr8oXXpOsDn5g8Yn7dLWBdu2tSKL05Ln1TFHoEe3Do1nTdWXloaFxvp+JIVmQZqYElRc/N5A5/16rMWljCSunUdoNgZowKxgVnHxH/+GUqnb/ItIGP3JvB01e+uWmHXAU6fJQ4EcgsH9NalyeDXuv58P9knS/fB1xU5+Je39DOTI4/ErusAftBeuw5I57nccDahEEby+eEvDFqZOLivvbu7uxlI377XFHn9K50Gv9QGjlXsbOw5agHvXpq+mW3JA8nOH5tjxJKBr+urBwcPAsae5u6DKt1f9EpmG7ftNvh2xUxuNpfLlSgQ3TKCka8D8UE5qtC95TPSNSwePA+jc2nywoPil3oP1/HWAz3epJ4OPl25m7qKBwx8vntavKMG519i1AVVlbXnsesAubOx+mQ084WBb0LFe/2oftl1lILk77D+qSTCeTPfgwcPoEv4yrAyS9ofVWigqMUajykZ+LomJDHSCbsSjw0YDShWOlimlni1WXuSVRCsNuaKSlnGyn55XXvuug44qacE/3bYPS3b1TnBWUZ+PPmoi64Djm6hsLjGzbhomO1qtdYf2L9P8JTup14McTvtIMSvftcBJ+cBXtQ6cdQFk2fgHXblb6GA6KwTCJkP3Ygdy9QUrzZRC1rqTAmm3ol8El3ocxv75C1qcVEq4PQHDPjZiyj3jtu7SnfyWsfChdVApa0EKnkKpbo/N6H/4tdCJ1HxIo4P0d1bicc+Em3zQ/VqYGl5ng7cjhUuSLdOTBMUVQhEV+J+fzgj7MqohWKW/OH4Vam2Vn9TqGsCFQjMw5u4xc/FmuNRBDzS05dOzlOzxXA4HF+5J5WIRbskJ9/R0RVFSzI6j8oHiquS9ix+SMxZKYOTrgOio64Dxmdrseep27EwfOxkVCrQ7IR3UKDAV/DISak4IrZCuItVPog/WsOuA07OZ0bhQzXhsD8sl7YjxE65XDN6Uin9CJUCZfvUcKkk4vm1YliRZbn4u1X9N3pOLWwprtG7L2qhWFl5UOLzY0qVplwQp6kri60wwm7Dg48lhMvSH78wGVUAo8tXdUVXoVlx1wVlc1o6aGHi4auXJoEsn4sZKsrid2Cnp9qkknBVAdiuA7TxVr3xvKixnGLmjj9sFH88jop0TMVyxTRFuP9Pmyxn+ahx0CbLSatdBxy5ded+j2FXiyY6RIiV2BL4s0r8nrWzrnnUIhLoCHjAtcMZtkuCMopKE+hIeP5QjnKkvYZIJc0WzQvPGi/mzzhLJe1Q1wHyeY5fI9IR8fzxlQxd4X7PyaXuuw7gzweC7G3SzLTC88eXMrgpQqOPqtgxeO46YP4FN3gjbH3j0fk4mc4Cz3/q6+aHm9uloCjofhS5EaIW+PvApe2NR2/39LQfXep3g3fqm+bm5EDf/Ycb69uipL2qRC06l1VJ1wHlh3rg5Fzf2P/2Oz379gBpP2jBR6Z73IykL5kcaH64tSnQwHcz3vOczrPAmCx1MMjTcEL29OxDaEja93xD5CPAxU4dbdYIQBy4v/VqXeRAEGJdylCrrgPox7gZgLZnX08ZTZbH/QRAguqe7Gs2Sh/QYvfDrfVtASxGm0eVq31/T7PWTGhIgUef4Pnwqvuu20Qnq3Egef/h/nXp/ia3I1EL0h5Ya3vAWmvHsUkT9DusAnGqCx8kwKkzNfly69U2jJ5rjQdstggm5L59+7Ba08rRb06ZAU1w/acek1SnQ0wmm7/d2GSlpFqtnt9j2M1Hb2PWGl6BYIYaAc1wPfZw5Zna/XIDH2YQ1x42ACAuZXp/jxO0MmC4n4x3yv+d2aTYIPaJjqIWxQBW5tapwH5HmlMB24+CNdiPwes/dSr8mnPNqdIdrGHUUike1OCe175bOqUwIksJ0E49ebzHwZpreDykwj0HX/vuyZOlMIDs9y89+ebxQRd6c4eH8dgWOwbaBZ6ECBih7Ovp6W7ucwsH8JysPfddB1ziqZgeyCQ8GhMkVq/rgFc8j3TN3eQQvxpdB+qN11zboKzeeN21jVrqjddcYdRSYZam3njd5IQT9imUnXEM1cNrpKCsBngNF7U0AB5LuNKQSmoAPBGTSqpe14G64wWtn5311HWg/o6hG+cYqpdKqj/e/+mo5f+DMvf39zzgtZ89c6a9RkGZTdcBU1WAxjLpbtXTri3n90/3AvnBO55qOU2D1lhOl10HXPu9H/YimXr6bnPzux7gki8r9HuVRi0VJAI1uoNsP/4I+U4DeXam7d133VAOPAwyNQzKaGr7bTfqA3A/gYXwHPz7cwjJN6fPtLVVSjiwFQhUen+voh0DxZceVay/dqC8v6L3+Wnv1C8hRd5/1tY2WAFh38Bm7bsO8EKF87P97CBYeT+iT3yuxQOAlWgw2b3JORifYb8n79aR30PWlKZVG4uyMqy8bVK/rcDWOxXQnW1rayPhhYqAr80h3f1tkUFVAbQ6m6wH7bJsh6I2e4h3vjBwQMCaQ1Pnx71Tv4Z04pQPGBV+R+7vwS9qfY+zm0Qy3SBwen99/vz5TwDzlh5vZNARX3KL38GuA6IjvvbBNln+tleRf4UMcrrNfv31JbcoyraUoYpdB7iSvYMo07W99+Lp1NTU3ikzXej9Nlv19fWt08Zn52rddUDcb2NgVLrB0xDjxS+//fbriIku9PUZO/VBo0KIgWtXKk5xG9YOQqF7ljIzGY2nlfoGHm7XpSqJ27Can7JVaTttwHnxs/7/b9ngDXzLUfUpugq+2kMujVBWnY6l8OI3veMD0dmgJd7AFk3Vq1RcIBtQeWq+ryX5+69wV/SbHu+9Ngu8ZPOm5f6z1l0HSo/wfGfNuvv7P4DlhHhf6/DOWOAl76+LDM5qON/OunDrmmJjisXzSYN+puV4OiW7vn+alTdIoCvVu5Y6wGIjbGlu6vzAbzLd1AvNwRHpQqxjGHgoG5V6loozLM6AmpUX+pesPa1tGZG0jJ2bA1tcFdqPelt7MP4RXrUbDWi72a6EXiiTs2xbvpbpMMrrS75CH1qPrgOG89S6scIM4Q3qY5R/qnHnf8lH8jIdZuUBk0k3TteBdWMECpfUmaIOr6gsvr0vtFYFOzWTL7cbqeuAYHQQCM+w91FtC9rypc4odOapmXwoOOnPWeOoRXNeMBhQ5PcMwaZqW/4BbMrpNjIdjMMa7AE3wPeOUX36gCz0s2Jb9j5+1kam6xvY4ssjaZSuAxy/qeVrNy++/1bopspwZqsCjArv7CkU8vi48lMo1es6ENRFoGdNuwXVtkz9MEicmGBz16hdB0QTn356/qLMThkPk+SEJrNhH3ATdSmKswDimXZ+/qrMzqckZy4ZlYbtOiDobpDBRNnge2XArOrY/9aGvcUwsMUEMF9043QdEEVdiqIdaPDM6ZTiAOWlB7SHYWvua34lNnrXAV7Qp2Daz0LCZ8/eex8I2hP98D/43V2yeZ1q/K4DjLhpfHqjHTAi+f77M1gyyWSiDv6N/1i+aIpANaQkuoGHJeyYGw+PEbcJKQoyXnJLjtN3Q9cBkXgTkIA3sCEyten4UWnXAdqm64B0niXksLF4MB9G23cdCBqO1q/rAIiw8TlsHB6Kw0groCG7DoCDwoYpRYHHA3EYV96T7oKuA9J50ZSiwOINfMvWstOVo+Db0Y7BeJ7CGFAT3sBGbRtYOtpauTof5Mw5bANeH9jc8RV9UuVdB2i1KgDlX6RvC00GllVCWOnbojW36jXnsbfyYf5HYI0OQo8H4jBask+sHEApjkEdCV0+qi1loHSDprGDrnErKLAWBGbjHTJe8mVJLC/gXdUrSbEK/KseEh40Kmyt8fQuy0XXAeJ5lJzkqU3tFl6Dl9zPClrnWZvuqp66Dji5lU9rI2wVry/5igs6eErNmKXeqa4DThpYStZcm6JQ8JJ9m6JN4FqddjQ1c+vltaDJ8barcZj2t3J3ZQNLzfB5JQUj4YHNncg0PF4FloySI2yENwA2d8xO4dV87UkLRjKg7TDJ/kr6UJs2HtVJ4xpGZtN1oKLOxtqPYwRkQNubk92vBI3VMH5H1W6iV1u3rlmgIqxTbkfFDtjzuzFq0dmf0qOenpfbIuH8rsejgvv3o1ac9cBjTFcyhuGjoIsp49mcR0ZPF0lRgQDPMCZLRxnwGG1QRuPfyn7Q6Oj/AkBd35zpURebAAAAAElFTkSuQmCC",
          },
          {
            id: 3,
            name: "Don Quijote",
            avatar:
              "https://www.clipartmax.com/png/middle/56-563494_thank-you-flat-design-hero-avatars-marvel-characters.png",
          },
          {
            id: 4,
            name: "DaVinci",
            avatar:
              "https://w7.pngwing.com/pngs/178/535/png-transparent-leonardo-da-vinci-portrait-art-computer-icons-others-face-hand-head.png",
          },
        ].map((el: any) => (
          <Box style={{ marginTop: 8 }}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box style={{ marginRight: 8 }}>
                <Avatar src={el.avatar} />
              </Box>
              <Box>{el.name}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MobileView;
