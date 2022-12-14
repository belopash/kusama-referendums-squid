import {EventHandlerContext} from '@subsquid/substrate-processor'
import {Store} from '@subsquid/typeorm-store'
import { ReferendumStatus } from '../../model'
import { updateReferendum } from '../utils/proposals'
import { getNotPassedData } from './getters'

export async function handleNotPassed(ctx: EventHandlerContext<Store>) {
    const index = getNotPassedData(ctx)

    await updateReferendum(ctx, index, ReferendumStatus.NotPassed)
}
