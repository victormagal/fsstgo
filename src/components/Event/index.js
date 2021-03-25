import React from 'react';
import { Summary, SummaryTitle, InfosSummary, TextInfosSummary, SummarySubtitle, SummaryLabel } from './styles';

import DateSVG from '../../assets/svg/date_events.svg';
import LocationSVG from '../../assets/svg/location_events.svg';
import TicketSVG from '../../assets/svg/ticket_events.svg';

export default function EventComponent() {
    return (
        <Summary>
            <SummaryTitle>Olá enfermeira</SummaryTitle>
            <InfosSummary>
                <DateSVG width={20} height={20} />
                <TextInfosSummary>
                    <SummarySubtitle>27/11/2021 - das 18h as 22hrs</SummarySubtitle>
                </TextInfosSummary>
            </InfosSummary>
            <InfosSummary>
                <LocationSVG width={20} height={20} />
                <TextInfosSummary>
                    <SummarySubtitle>Auditório FIEG/SESI</SummarySubtitle>
                    <SummaryLabel>Rua Araguaia, 1544 Setor Vila Nova</SummaryLabel>
                </TextInfosSummary>
            </InfosSummary>
            <InfosSummary>
                <TicketSVG width={20} height={20} />
                <TextInfosSummary>
                    <SummarySubtitle>Gratuito</SummarySubtitle>
                </TextInfosSummary>
            </InfosSummary>
        </Summary>
    );
}
